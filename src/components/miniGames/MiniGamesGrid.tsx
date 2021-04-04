import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

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
  
  &[data-name = 'game-1'] {
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
    return (
        <GridContainer>
            <GroupContainer data-name="game-1">
                <NavLink exact to='/mini-games/game-1'>
                    <h3>Game 1</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer data-name="game-2">
                <NavLink to='/mini-games/game-2'>
                    <h3>Game 2</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer data-name="game-3">
                <NavLink to='/mini-games/game-3'>
                    <h3>Game 3</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer data-name="game-4">
                <NavLink to='/mini-games/game-4'>
                    <h3>Game 4</h3>
                </NavLink>
            </GroupContainer>
        </GridContainer>
    );
};

export default MiniGamesGrid;
