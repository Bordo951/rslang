import React from 'react';
import GameControls from "./GameControls";
import styled from "styled-components";
import {MiniGamesWordsFetcher, MiniGamesWordsGroup, MiniGamesWordsPage} from "./MiniGamesWordsFetcher";

const GameContainer = styled.div`
  background-color: white;
`;

const Game1: React.FC = () => {
  const group = MiniGamesWordsGroup();
  const page = MiniGamesWordsPage();
  const words = MiniGamesWordsFetcher();

  console.log('dataWords for Game 1', words);

  return <div>
    <GameControls/>
    <GameContainer id="game">
      Game1, group: {group}, page: {page}
    </GameContainer>
  </div>;
};

export default Game1;
