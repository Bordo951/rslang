import axios from 'axios';
import { AppDispatch, AppState } from './store';

//types
type WordType = {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  id: string;
  image: string;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
};

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type WordState = {
  entity: WordType | null;
  status: RequestStatus;
  error: string;
};

//initial state
const initState: WordState = {
  entity: null,
  status: 'idle',
  error: '',
};

//reducer
export const wordReducer = (
  state: WordState = initState,
  action: WordActions
): WordState => {
  switch (action.type) {
    case 'word/setWordsData':
      return {
        ...state,
        entity: action.payload,
        status: 'succeeded',
        error: '',
      };
    case 'word/setRequestStatus':
      return { ...state, status: action.payload };
    case 'word/setErrorMessage':
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

export const fetchWordData = (id: string) => async (dispatch: AppDispatch) => {
  const url = `https://vhoreho-rslang.herokuapp.com/words/${id}`;
  dispatch(setRequestStatus('loading'));
  try {
    const { data } = await axios.get(url);
    const word: WordType = {
      audio: data.audio,
      audioExample: data.audioExample,
      audioMeaning: data.audioMeaning,
      id: data.id,
      image: data.image,
      textExample: data.textExample,
      textExampleTranslate: data.textExampleTranslate,
      textMeaning: data.textMeaning,
      textMeaningTranslate: data.textMeaningTranslate,
      transcription: data.transcription,
      word: data.word,
      wordTranslate: data.wordTranslate,
    };
    dispatch(setWordData(word));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

//actions

const setWordData = (entities: WordType) =>
  ({ type: 'word/setWordsData', payload: entities } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: 'word/setRequestStatus', payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: 'word/setErrorMessage', payload: message } as const);

export type WordActions =
  | ReturnType<typeof setWordData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getWordData = (state: AppState) => state.word.entity;
export const getErrorMessage = (state: AppState) => state.word.error;
export const getRequestStatus = (state: AppState) => state.word.status;
