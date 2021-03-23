import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { WordsActions, wordsReducer, WordsState } from './wordsSlice';
import { WordActions, wordReducer, WordState } from './wordSlice';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  words: wordsReducer,
  word: wordReducer,
});

export const store: Store<AppState, AppActions> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composedEnhancer);

export type AppState = {
  words: WordsState;
  word: WordState;
};

export type AppActions = WordsActions | WordActions;

export type AppDispatch = ThunkDispatch<AppState, unknown, AppActions>;
