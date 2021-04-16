import React from 'react';
import GameControls from "./GameControls";
import styled from "styled-components";
import {MiniGamesWordsFetcher, MiniGamesWordsGroup, MiniGamesWordsPage} from "./MiniGamesWordsFetcher";

const GameContainer = styled.div`
  background-color: white;
`;

const Game4: React.FC = () => {
  const group = MiniGamesWordsGroup();
  const page = MiniGamesWordsPage();
  const words = MiniGamesWordsFetcher();

  console.log('dataWords for Game 4', words);

  return <div>
    <GameControls showSettingWindow={false}/>
    <GameContainer id="game">
      Game4, group: {group}, page: {page}
    </GameContainer>
  </div>;
};

export default Game4;
