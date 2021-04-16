import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { WordsActions, wordsReducer, WordsState } from './wordsSlice';
import { WordActions, wordReducer, WordState } from './wordSlice';
import { AuthActions, authReducer, AuthState } from './authSlice';
import {
  UserWordsActions,
  userWordsReducer,
  UserWordsState,
} from './dictionary';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  words: wordsReducer,
  word: wordReducer,
  auth: authReducer,
  userWords: userWordsReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  words: WordsState;
  word: WordState;
  auth: AuthState;
  userWords: UserWordsState;
};

export type AppActions =
  | WordsActions
  | WordActions
  | AuthActions
  | UserWordsActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
