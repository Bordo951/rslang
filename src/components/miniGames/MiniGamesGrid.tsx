import React from 'react';

import styled from 'styled-components';
import {Button} from 'react-bootstrap';
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
  display: flex;
  
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
  div {
  width: 45%;
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
        let randomPage = Math.floor(Math.random() * 28);

        window.location.href = '#/mini-games/game-' + gameId + '?group=' + selectedGroup + '&page=' + randomPage;
    };

    return (
        <GridContainer>
            <GroupContainer data-name="game-1">
                <div>
                    <h3>Саванна</h3>
                    <MiniGamesLevels gameId={1}/>
                    <Button variant="success" onClick={() => startGame(1)}>Начать игру</Button>
                </div>
                <div>«Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию. После
                    запуска игры вы увидите падающее слово на английском и четыре варианта перевода на русский язык.
                    Выбрать правильный ответ можно, кликнув по нему мышью.
                </div>
            </GroupContainer>
            <GroupContainer data-name="game-2">
                <div>
                    <h3>Аудиовызов</h3>
                    <MiniGamesLevels gameId={2}/>
                    <Button variant="warning" onClick={() => startGame(2)}>Начать игру</Button>
                </div>
                <div>«Аудиовызов» - это тренировка, развивающая навыки речи и перевода.
                    Вы слышите слово и видите 4 варианта перевода. Выбрать правильный ответ можно, кликнув по нему
                    мышью.
                </div>
            </GroupContainer>
            <GroupContainer data-name="game-3">
                <div>
                    <h3>Игра на память</h3>
                    <MiniGamesLevels gameId={3}/>
                    <Button variant="info" onClick={() => startGame(3)}>Начать игру</Button>
                </div>
                <div>«Игра на память» - эта игра представляет собой группу английских слов и группу из русских
                    слов, которые нужно соотнести между собой.
                </div>
            </GroupContainer>
            <GroupContainer data-name="game-4">
                <div>
                    <h3>Спринт</h3>
                    <MiniGamesLevels gameId={4}/>
                    <Button variant="danger" onClick={() => startGame(4)}>Начать игру</Button>
                </div>
                <div>«Спринт» - это тренировка для повторения заученных слов из вашего словаря. После запуска
                    игры вы увидите слово и перевод. Вам нужно выбрать правильный вариант ответа.
                </div>
            </GroupContainer>
        </GridContainer>
    );
};

export default MiniGamesGrid;
