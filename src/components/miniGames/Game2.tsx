import React from 'react';
import GameControls from "./GameControls";
import styled from "styled-components";

const GameContainer = styled.div`
  background-color: white;
`;

const Game2: React.FC = () => {
  return <div>
    <GameControls/>
    <GameContainer id="game">
      Game2
    </GameContainer>
  </div>;
};

export default Game2;
