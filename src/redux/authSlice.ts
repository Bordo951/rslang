import axios from 'axios';
import { AppDispatch, AppState } from './store';

//types
type UserType = {
  name: string;
  token: string;
};

type SignUpType = {
  email: string;
  password: string;
};

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AuthState = {
  user: UserType;
  status: RequestStatus;
  signUpErrors: {
    email: string;
    password: string;
  };
  logInError: {
    msg: string;
  };
};

// initial state
const initState: AuthState = {
  user: {
    name: '',
    token: '',
  },
  status: 'idle',
  signUpErrors: {
    email: '',
    password: '',
  },
  logInError: {
    msg: '',
  },
};

//reducers
export const authReducer = (
  state: AuthState = initState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case 'auth/setUserData':
      return {
        user: {
          name: action.payload.username,
          token: action.payload.token,
        },
        status: 'succeeded',
        signUpErrors: {
          email: '',
          password: '',
        },
        logInError: {
          msg: '',
        },
      };
    case 'auth/clearUserData':
      return {
        status: 'idle',
        user: {
          name: '',
          token: '',
        },
        signUpErrors: {
          email: '',
          password: '',
        },
        logInError: {
          msg: '',
        },
      };
    case 'auth/setRequestStatus':
      return { ...state, status: action.payload };
    case 'auth/setLogInErrorMessage':
      return {
        user: {
          token: '',
          name: '',
        },
        status: 'failed',
        signUpErrors: {
          email: '',
          password: '',
        },
        logInError: {
          msg: action.payload,
        },
      };
    case 'auth/setSignUpErrors':
      return {
        user: {
          token: '',
          name: '',
        },
        status: 'failed',
        signUpErrors: {
          email: action.payload.email,
          password: action.payload.password,
        },
        logInError: {
          msg: '',
        },
      };
    case 'auth/clearAuthErrors':
      return {
        ...state,
        signUpErrors: {
          email: '',
          password: '',
        },
        logInError: {
          msg: '',
        },
      };
    default:
      return state;
  }
};

//thunk

export const userSingUp = ({ email, password }: SignUpType) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = 'https://vhoreho-rslang.herokuapp.com/users';
  const params: SignUpType = {
    email,
    password,
  };
  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.post(url, params);
    console.log(data);
  } catch (error) {
    const { email, password } = error.response.data.errors;
  }
};

//actions
const setUserData = (username: string, token: string) =>
  ({ type: 'auth/setUserData', payload: { username, token } } as const);

const clearUserData = () => ({ type: 'auth/clearUserData' } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: 'auth/setRequestStatus', payload: status } as const);

const setLogInErrorMessage = (message: string) =>
  ({ type: 'auth/setLogInErrorMessage', payload: message } as const);

const setSignUpErrors = (email: string, password: string) =>
  ({ type: 'auth/setSignUpErrors', payload: { email, password } } as const);

export const clearAuthErrors = () =>
  ({ type: 'auth/clearAuthErrors' } as const);

export type AuthActions =
  | ReturnType<typeof setUserData>
  | ReturnType<typeof clearUserData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setLogInErrorMessage>
  | ReturnType<typeof setSignUpErrors>
  | ReturnType<typeof clearAuthErrors>;

//selectors
export const getLogInErrorMessage = (state: AppState) =>
  state.auth.logInError.msg;
export const getSignUpErrors = (state: AppState) => state.auth.signUpErrors;
export const getRequestStatus = (state: AppState) => state.auth.status;
export const getUserName = (state: AppState) => state.auth.user.name;
