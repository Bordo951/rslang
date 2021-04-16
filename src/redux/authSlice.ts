import axios from 'axios';
import { AppDispatch, AppState } from './store';

//types
type UserType = {
  id: string;
  token: string;
};

type SignUpType = {
  email: string;
  password: string;
};

type SignInType = {
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
    id: '',
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
          id: action.payload.userId,
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
          id: '',
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
          id: '',
          token: '',
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
          id: '',
          token: '',
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
    dispatch(userlogIn({ email, password }));
  } catch (error) {
    const { email, password } = error.response.data.errors;
  }
};
//{Gfhjkm_123asd", email: "FarrukhTest@blablmail.com"}
export const userlogIn = ({ email, password }: SignInType) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = 'https://vhoreho-rslang.herokuapp.com/signin';
  const params: SignInType = {
    email,
    password,
  };
  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.post(url, params);
    dispatch(setUserData(data.userId, data.token));
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
  } catch (error) {
    const { email, password } = error.response.data.errors;
  }
};
export const logOut = () => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  dispatch(clearUserData());
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
};

//actions
const setUserData = (userId: string, token: string) =>
  ({ type: 'auth/setUserData', payload: { userId, token } } as const);

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
export const getUserId = (state: AppState) => state.auth.user.id;
