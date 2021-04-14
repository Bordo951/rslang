import axios from 'axios';
import Header from '../parts/Header';
import { AppDispatch, AppState } from './store';

//types

export type UserSetWordType = {
  userId: string | null;
  wordId: string;
  word: object;
};
export type UserGetWordType = {
  userId: string;
  wordId: string;
};

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type UserWordsState = {
  entities: UserSetWordType[];
  status: RequestStatus;
  error: string;
};
//initial state
const initState: UserWordsState = {
  entities: [],
  status: 'idle',
  error: '',
};

//reducer
export const userWordsReducer = (
  state: UserWordsState = initState,
  action: UserWordsActions
): UserWordsState => {
  switch (action.type) {
    case 'words/setWordsData':
      return {
        ...state,
        entities: action.payload,
        status: 'succeeded',
        error: '',
      };
    case 'words/setRequestStatus':
      return { ...state, status: action.payload };
    case 'words/setErrorMessage':
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

//thunk

let token = localStorage.getItem('token');

export const createUserWord = ({
  userId,
  wordId,
  word,
}: UserSetWordType) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-rslang.herokuapp.com/users/${userId}/words/${wordId}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const WordData = {
    word,
  };
  // const params: UserSetWordType = {
  //   userId,
  //   wordId,
  //   word,
  // };

  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.post(url, { headers, WordData });
    console.log(data);
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

// export const getUserWord = ({ userId, wordId }: UserGetWordType) => async (
//   dispatch: AppDispatch,
//   getState: () => AppState
// ) => {
//   const url = 'https://vhoreho-rslang.herokuapp.com/users';
//   const params: UserGetWordType = {
//     userId,
//     wordId,
//   };
//   dispatch(setRequestStatus('loading'));
//   try {
//     const { data } = await axios.get(url, params);
//     console.log(data);
//   } catch (error) {
//     dispatch(setErrorMessage(error.message));
//   }
// };

//actions

const setWordsData = (entities: UserSetWordType[]) =>
  ({ type: 'words/setWordsData', payload: entities } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: 'words/setRequestStatus', payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: 'words/setErrorMessage', payload: message } as const);

export type UserWordsActions =
  | ReturnType<typeof setWordsData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getWordsData = (state: AppState) => state.words.entities;
export const getErrorMessage = (state: AppState) => state.words.error;
export const getRequestStatus = (state: AppState) => state.words.status;
