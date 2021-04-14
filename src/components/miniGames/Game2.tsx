import React, {useEffect, useReducer} from 'react';
import GameControls from "./GameControls";
import styled from "styled-components";
import {MiniGamesWordsFetcher, MiniGamesWordsGroup, MiniGamesWordsPage} from "./MiniGamesWordsFetcher";
import {
  AudioGameInitialState,
  MiniGamesAction,
  MiniGamesStateType
} from "./MiniGamesStateType";
import {pickTranslatableWords} from "../../helpers/TranslatableWordsPicker";
import {shuffleWords} from "../../helpers/WordsShuffler";

const GameContainer = styled.div` 
  background: url(${AudioGameInitialState.gameBackground}) center center/cover no-repeat;
  height: 100vh;
  position: relative;
`;

const Game2: React.FC = () => {
  const group = MiniGamesWordsGroup();
  const page = MiniGamesWordsPage();
  const words = MiniGamesWordsFetcher();

  console.log('dataWords for Game 2', words);

  function reducer(state: MiniGamesStateType, action: MiniGamesAction) {
    return { ...state, [action.type]: action.value };
  }
  const [state, dispatch] = useReducer(reducer, AudioGameInitialState);

  useEffect(() => {
    if (!words.length) return;

    let translatableWords = pickTranslatableWords(words, state.index);
    let verifiableWords = words[state.index]?.word;
    let verifiableWordsAudio = words[state.index]?.audio;

    dispatch({ type: "translatableWords", value: translatableWords });
    dispatch({ type: "verifiableWords", value:verifiableWords });
    dispatch({ type: "verifiableWordsAudio", value: verifiableWordsAudio });
  }, [state.index, state.counter, words]);

  return <div>
    <GameContainer id="game">
      <GameControls/>
      <button>Game2, group: {group}, page: {page}</button><br />
      <button>verifiableWords: {state.verifiableWords}, verifiableWordsAudio: {state.verifiableWordsAudio}</button>
      {shuffleWords(state.translatableWords).map((word) => (
          <button data-value={word.word} key={`${word.word}${words[state.index]}`}>{word.wordTranslate}</button>
      ))}
    </GameContainer>
  </div>;
};

export default Game2;