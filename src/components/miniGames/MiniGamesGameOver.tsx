import {NavLink} from "react-router-dom";
import {VscChromeClose} from "react-icons/all";
import {Button} from "react-bootstrap";
import React from "react";
import styled from "styled-components";

interface Props {
    guessedWords: any;
    repeatGameAction: any;
    gameOverBackground: string;
}

const GameOver = styled.div<{ lengthWords: number, gameOverBackground: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  background: url(${(p) => p.gameOverBackground})
    center center/cover no-repeat fixed;
  width: 100%;
  height: 100vh;
  h3 {
    margin: 0 auto;
    font-size: 4rem;
    font-weight: 900;
    font-family: "BubblegumSans-Regular";
    color: rgb(0, 206, 209);
  }
  h4 {
    text-shadow: 3px 2px 3px rgb(247, 243, 5);
    color: white;
    font-size: 3rem;
    font-weight: 800;
    font-family: "BubblegumSans-Regular", cursive;
  }
  P {
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.7);
    width: 25%;
    margin-left: 3rem;
    padding: 0.8rem 0.3rem;
    border-radius: 10px;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  }
  ol {
    margin: 0 0 5rem 3rem;
    max-width:  ${(p) => {
    return p.lengthWords < 6 ? `35%` : `55%`
}};
    width: max-content;
    min-width: 2rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0.8rem 0.3rem;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.5);
    list-style-position: inside;
  }

  li {
    border-radius: 10px;
    padding: 5px 0.3rem;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
    margin: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    font-style: oblique;
  }
  span {
    font-weight: 800;
    background-color: rgba(245, 4, 4, 0.7);
    text-shadow: 3px 2px 3px rgb(247, 243, 5);
    color: white;
    margin: 5rem auto 3rem;
    padding: 0.5rem 0.3rem;
    border-radius: 10px;
    font-size: 4rem;
    text-align: center;
    box-shadow: 0 0 5px 5px rgba(60, 238, 223, 0.2);
  }
`;

const MiniGamesGameOver: React.FC<Props> = ({guessedWords, repeatGameAction, gameOverBackground}) => {
    return (
        <GameOver lengthWords={guessedWords.current.length} gameOverBackground={gameOverBackground}>
            <div className="d-flex">
                <NavLink to="/mini-games/" data-name="Mini Games">
                    <button type="button" className="btn btn-danger">
                        <VscChromeClose/>
                    </button>
                </NavLink>
            </div>
            <h4 className="mx-auto">Конец игры</h4>
            <p>Правильных слов: {guessedWords.current.length}</p>
            {!!guessedWords.current.length ? (
                <ol>
                    {guessedWords.current.map((word: any, index: any) => (
                        <li key={`${word}@!${index}`}>{word}</li>
                    ))}
                </ol>
            ) : (
                <span>Все получиться!Попробуй еще раз</span>
            )}
            <Button
                variant="success"
                className="mx-auto w-25"
                onClick={() => repeatGameAction()}>
                Повторить
            </Button>
        </GameOver>
    );
};

export default MiniGamesGameOver;