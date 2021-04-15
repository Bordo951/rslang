import axios from 'axios';
import Header from '../parts/Header';
import { AppDispatch, AppState } from './store';
import { fetchWordData } from './wordSlice';

//types

export type UserSetWordType = {
  userId: string | null;
  wordId: string;
  word: object;
};
export type UserGetWordsType = {
  wordId: string;
};
export type UserGetWordType = {
  userId: string | null;
  wordId: string;
};

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type UserWordsState = {
  entities: UserGetWordsType[];
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
    case 'userWords/setWordsData':
      return {
        ...state,
        entities: action.payload,
        status: 'succeeded',
        error: '',
      };
    case 'userWords/setRequestStatus':
      return { ...state, status: action.payload };
    case 'userWords/setErrorMessage':
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
    ...word,
  };

  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.post(url, WordData, { headers });
    console.log(data);
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

// export const getUserWord = ({ userId, wordId }: UserGetWordType) => async (
//   dispatch: AppDispatch,
//   getState: () => AppState
// ) => {
//   const url = `https://vhoreho-rslang.herokuapp.com/users/${userId}/words/${wordId}`;
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     Accept: 'application/json',
//   };
//   dispatch(setRequestStatus('loading'));
//   try {
//     const { data } = await axios.get(url, { headers });
//     console.log(data.wordId);
//   } catch (error) {
//     dispatch(setErrorMessage(error.message));
//   }
// };

export const getAgregatedWords = (userId: string | null) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-rslang.herokuapp.com/users/${userId}/aggregatedWords`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  };
  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.get<UserGetWordsType[]>(url, { headers });

    dispatch(setWordsData(data));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};
export const getUserWords = (userId: string | null) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const url = `https://vhoreho-rslang.herokuapp.com/users/${userId}/words`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  };
  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.get<UserGetWordsType[]>(url, { headers });
    const wordsId = data.map((el) => ({
      wordId: el.wordId,
    }));
    // console.log(wordsId);
    // dispatch(setWordsData(wordsId));
    // for (let id of wordsId) {
    //   let wordId = id.wordId;
    //   dispatch(fetchWordData(wordId));
    // }
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions

const setWordsData = (entities: UserGetWordsType[]) =>
  ({ type: 'userWords/setWordsData', payload: entities } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: 'userWords/setRequestStatus', payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: 'userWords/setErrorMessage', payload: message } as const);

export type UserWordsActions =
  | ReturnType<typeof setWordsData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getWordsData = (state: AppState) => state.userWords.entities;
export const getErrorMessage = (state: AppState) => state.words.error;
export const getRequestStatus = (state: AppState) => state.words.status;
