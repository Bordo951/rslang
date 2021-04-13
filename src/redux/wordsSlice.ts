import axios from 'axios';
import { AppDispatch, AppState } from './store';

//types
export type WordType = {
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
  group: number;
  page: number;
};

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type WordsState = {
  entities: WordType[];
  status: RequestStatus;
  error: string;
};

//initital state
const initState: WordsState = {
  entities: [],
  status: 'idle',
  error: '',
};

//reducer
export const wordsReducer = (
  state: WordsState = initState,
  action: WordsActions
): WordsState => {
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
export const fetchWordsData = (groupNum: number, pageNum: number) => async (
  dispatch: AppDispatch
) => {
  const url = 'https://vhoreho-rslang.herokuapp.com/words';
  dispatch(setRequestStatus('loading'));
  const queryParams = {
    params: {
      page: pageNum?.toString(),
      group: groupNum?.toString(),
    },
  };
  try {
    const { data } = await axios.get<WordType[]>(url, queryParams);
    const words = data.map((el) => ({
      group: el.group,
      page: el.page,
      audio: el.audio,
      audioExample: el.audioExample,
      audioMeaning: el.audioMeaning,
      id: el.id,
      image: el.image,
      textExample: el.textExample,
      textExampleTranslate: el.textExampleTranslate,
      textMeaning: el.textMeaning,
      textMeaningTranslate: el.textMeaningTranslate,
      transcription: el.transcription,
      word: el.word,
      wordTranslate: el.wordTranslate,
    }));
    dispatch(setWordsData(words));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};
//actions

const setWordsData = (entities: WordType[]) =>
  ({ type: 'words/setWordsData', payload: entities } as const);

const setRequestStatus = (status: RequestStatus) =>
  ({ type: 'words/setRequestStatus', payload: status } as const);

const setErrorMessage = (message: string) =>
  ({ type: 'words/setErrorMessage', payload: message } as const);

export type WordsActions =
  | ReturnType<typeof setWordsData>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof setErrorMessage>;

//selectors
export const getWordsData = (state: AppState) => state.words.entities;
export const getErrorMessage = (state: AppState) => state.words.error;
export const getRequestStatus = (state: AppState) => state.words.status;
