import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import MiniGamesLevels from "./MiniGamesLevels";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 50px;
  width: 80%;
  margin: 10px auto;
`;

const GroupContainer = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  
  &[data-name = 'Savannah'] {
    background-image: url('/assets/images/game-1.png');
  }
  &[data-name = 'game-2'] {
    background-image: url('/assets/images/game-2.png');
  }
  &[data-name = 'game-3'] {
    background-image: url('/assets/images/game-3.png');
  }
  &[data-name = 'game-4'] {
    background-image: url('/assets/images/game-4.png');
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
`;

const MiniGamesGrid: React.FC = () => {
    let startGame = (gameId: number) => {
        let selectedLevel = (document.getElementById('level-game-' + gameId)) as HTMLSelectElement;
        let selectedIndex = selectedLevel.selectedIndex;
        let selectedOption = selectedLevel.options[selectedIndex];
        let selectedGroup = selectedOption.value;

        window.location.href = '#/mini-games/game-' + gameId + '?group=' + selectedGroup;
    };

    return (
        <GridContainer>
            <GroupContainer data-name="Savannah">
                <h3>Саванна</h3>
                <MiniGamesLevels gameId={1}/>
                <NavLink to = "/mini-games/savannah/">
                <button onClick={() => startGame(1)}>Начать игру</button>
                </NavLink>
            </GroupContainer>
            <GroupContainer data-name="game-2">
                <h3>Игра 2</h3>
                <MiniGamesLevels gameId={2}/>
                <button onClick={() => startGame(2)}>Начать игру</button>
            </GroupContainer>
            <GroupContainer data-name="game-3">
                <h3>Игра 3</h3>
                <MiniGamesLevels gameId={3}/>
                <button onClick={() => startGame(3)}>Начать игру</button>
            </GroupContainer>
            <GroupContainer data-name="game-4">
                <h3>Игра 4</h3>
                <MiniGamesLevels gameId={4}/>
                <button onClick={() => startGame(4)}>Начать игру</button>
            </GroupContainer>
        </GridContainer>
    );
};

export default MiniGamesGrid;
