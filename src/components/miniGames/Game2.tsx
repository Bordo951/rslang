import React, { useEffect, useReducer, useRef } from "react";
import GameControls from "./GameControls";
import styled from "styled-components";
import {
  MiniGamesWordsFetcher,
  MiniGamesWordsGroup,
  MiniGamesWordsPage,
} from "./MiniGamesWordsFetcher";
import { VscChromeClose, VscSettingsGear } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { getRequestStatus, WordType } from "../../redux/wordsSlice";
import GameOver from "./componentsMemory/GameOver";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import Loading from "./componentsMemory/Loading";

const GameContainer = styled.div`
  background: url(/images/brain.jpg) center center/cover no-repeat fixed;
  height: 100%;
`;
const SettingsWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: max-content;
  background: url(/images/settings.png) center center/cover no-repeat;
  font-family: "BubblegumSans-Regular", cursive;
  border-radius: 10px;
  form {
    display: flex;
    justify-content: center;

    > div {
      margin: 0 5px 15px 5px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    margin: 0.3rem 0 0 0.3rem;
    height: 2rem;
    width: 2rem;
    background-image: linear-gradient(
      to right,
      #1c2122 0%,
      gray 51%,
      #ece9e6 100%
    );
    padding: 0.2rem 0.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 10px #b6b8b9;
    border-radius: 10px;
    display: block;
    outline: none;
    &:hover {
      background-position: right center;
      color: #f10e0e;
      text-decoration: none;
    }
  }
`;
const Titile = styled.h3`
  font-size: 3rem;
  margin-left: 14%;
  font-weight: 900;
  font-family: "BubblegumSans-Regular";
  color: rgb(0, 206, 209);
  text-shadow: 3px 2px 3px rgb(2, 2, 2);
`;

const SettingsBtn = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background-image: linear-gradient(
      to right,
      #232526 0%,
      #414345 51%,
      #232526 100%
    );
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    /* display: block; */
    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Statistics = styled.div<Partial<stateType>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(253, 249, 249, 0.308);
  width: 23%;
  ul {
    margin-top: 25px;
    display: flex;
    justify-content: space-evenly;
    width: ${(p) => (p.counterLife || 0) * 2.5}rem;
    list-style-type: none;
    height: 2rem;
    text-align: center;
  }

  li {
    display: inline-block;
    width: 2rem;
    padding: 8px 0.4rem;
    background: url(/images/heart.svg) center center/cover no-repeat;
  }

  a {
    margin: 0.3rem 0.3rem 0 0;
    align-self: flex-end;
  }

  div {
    margin-top: 5px;
    color: rgba(252, 106, 22, 0.803);
    font-size: 1.5rem;
    font-family: "BubblegumSans-Regular";
    text-shadow: 1px 1px 1px rgb(255, 253, 253);
    span {
      text-shadow: 3px 3px 3px rgba(241, 4, 4, 0.774);
      color: whitesmoke;
      font-size: 2rem;
      font-family: "BubblegumSans-Regular";
      margin-right: 0.8rem;
    }
  }
`;
const Timer = styled.div`
  color: yellow;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  margin: 10px auto;
  border-radius: 50%;
  background-color: black;
  text-align: center;
`;
const CardTimer = styled.div`
  background-color: rgba(255, 255, 255, 0.603);
  margin: 20px auto 0;
  width: 80%;
  border-radius: 20px;
  padding: 20px 0;
`;
const VerifiableWord = styled.div<Partial<stateType>>`
  background-color: rgba(0, 4, 255, 0.5);
  border-radius: 20px;
  padding: 10px 1rem;
  margin: 0 auto;
  width: 90%;
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-auto-rows: 60px;
    list-style-type: none;
  }
  input {
    background-image: linear-gradient(
      to right,
      #f857a6 0%,
      #ff5858 51%,
      #f857a6 100%
    );
    opacity: ${(p) => p.opacity};
    display: flex;
    width: 100%;
    padding: 20px 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
    display: block;
    margin: auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    &:hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
    }
  }
`;
const TranslationWords = styled.div<Partial<stateType>>`
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 20px;
  padding: 10px 1rem;
  margin: 0 auto;
  width: 90%;
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    list-style-type: none;
  }
  input {
    background-image: linear-gradient(
      to right,
      #4b6cb7 0%,
      #233963 51%,
      #4b6cb7 100%
    );
    opacity: ${(p) => p.opacity};
    display: flex;
    width: 100%;
    padding: 20px 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
    display: block;
    margin: auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    &:hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
    }
  }
`;

type WordTypeForButton = WordType & { isDisabled: boolean };
type stateType = {
  seconds: number;
  enWords: WordTypeForButton[];
  ruWords: WordTypeForButton[];
  counter: number;
  counterLife: number;
  translitionValue: string;
  verifiableValue: string;
  isClickedTranslitionButton: boolean;
  isClickedVerifiableButton: boolean;
  opacity: number;
  isSettingsWindow: boolean;
};
const Game2: React.FC = () => {
  const status = useSelector(getRequestStatus);
  const words = MiniGamesWordsFetcher();
  let guessedWords = useRef<string[]>([]);
  let faildAudio = new Audio("audio/faild.mp3");

  // const group = MiniGamesWordsGroup();
  // const page = MiniGamesWordsPage();
  const initialState: stateType = {
    enWords: [],
    ruWords: [],
    seconds: 60,
    opacity: 1,
    counter: 0,
    counterLife: 5,
    translitionValue: "",
    verifiableValue: "",
    isClickedTranslitionButton: false,
    isClickedVerifiableButton: false,
    isSettingsWindow: false,
  };
  type Action = {
    type: keyof stateType;
    value: stateType[keyof stateType];
  };
  function reducer(state: stateType, action: Action) {
    return { ...state, [action.type]: action.value };
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (state.seconds > 0) {
        dispatch({ type: "seconds", value: state.seconds - 1 });
      } else clearInterval(myInterval);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (state.enWords.length) return;
    const wordsCopy = words.splice(10);
    const enWords = shuffle(wordsCopy).map((obj) => ({
      ...obj,
      isDisabled: false,
    }));
    const ruWords = shuffle(wordsCopy).map((obj) => ({
      ...obj,
      isDisabled: false,
    }));
    dispatch({ type: "enWords", value: enWords });
    dispatch({ type: "ruWords", value: ruWords });
  }, [words, state.counter]);

  const hendlerCheck = (e: any) => {
    const verifiableValue = e.target.attributes[1].value;
    dispatch({ type: "verifiableValue", value: verifiableValue });
    dispatch({ type: "isClickedVerifiableButton", value: true });
    if (state.translitionValue === verifiableValue) {
      const enWords = state.enWords;
      const currentEnWord = enWords.find((obj) => obj.word === verifiableValue);
      if (currentEnWord) {
        currentEnWord.isDisabled = true;
      }
      const ruWords = state.ruWords;
      const currentRuWord = ruWords.find(
        (obj) => obj.word === state.translitionValue
      );
      if (currentRuWord) {
        currentRuWord.isDisabled = true;
      }

      dispatch({ type: "enWords", value: [...enWords] });
      dispatch({ type: "ruWords", value: [...ruWords] });
    }
  };

  const hendlerCheckTranslition = (e: any) => {
    const translitionValue = e.target.attributes[1].value;
    dispatch({ type: "translitionValue", value: translitionValue });
    dispatch({ type: "isClickedTranslitionButton", value: true });
    if (state.verifiableValue === translitionValue) {
      const enWords = state.enWords;
      const currentEnWord = enWords.find(
        (obj) => obj.word === state.verifiableValue
      );
      if (currentEnWord) {
        currentEnWord.isDisabled = true;
      }
      const ruWords = state.ruWords;
      const currentRuWord = ruWords.find(
        (obj) => obj.word === translitionValue
      );
      if (currentRuWord) {
        currentRuWord.isDisabled = true;
      }

      dispatch({ type: "enWords", value: [...enWords] });
      dispatch({ type: "ruWords", value: [...ruWords] });
    }
  };

  if (state.isClickedTranslitionButton && state.isClickedVerifiableButton) {
    if (state.verifiableValue === state.translitionValue) {
      dispatch({ type: "counter", value: state.counter + 1 });
      guessedWords.current.push(state.verifiableValue);
    } else {
      dispatch({ type: "counterLife", value: state.counterLife - 1 });
      faildAudio.play();
    }
    dispatch({ type: "isClickedTranslitionButton", value: false });
    dispatch({ type: "isClickedVerifiableButton", value: false });
  }

  const shuffle = (array: WordType[]) => {
    const arr = [...array];
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };

  return (
    <GameContainer id="game">
      {(state.counterLife < 1 || state.seconds === 0) && (
        <GameOver lengthWords={guessedWords.current.length}>
          <div className="d-flex">
            <h3>Memory</h3>
            <NavLink to="/mini-games/" data-name="Mini Games">
              <button type="button" className="btn btn-danger">
                <VscChromeClose />
              </button>
            </NavLink>
          </div>
          <h4 className="mx-auto">Конец игры</h4>
          <p>Правильных слов: {guessedWords.current.length}</p>
          {!!guessedWords.current.length ? (
            <ol>
              {guessedWords.current.map((word) => (
                <li key={`${word}@!`}>{word}</li>
              ))}
            </ol>
          ) : (
            <span>Все получиться!Попробуй еще раз</span>
          )}
          <Button
            variant="success"
            className="mx-auto w-25"
            onClick={() => {
              dispatch({ type: "counterLife", value: 5 });
              dispatch({ type: "seconds", value: 60 });
              dispatch({ type: "counter", value: 0 });
              guessedWords.current = [];
            }}
          >
            Повторить
          </Button>
        </GameOver>
      )}
      {status === "loading" && <Loading />}
      <Container>
        <SettingsBtn>
          <button type="button" className="btn btn-dark">
            <GameControls />
          </button>
        </SettingsBtn>
        <Titile>Memory</Titile>
        <Statistics counterLife={state.counterLife}>
          <NavLink to="/mini-games/" data-name="Mini Games">
            <button type="button" className="btn btn-danger">
              <VscChromeClose />
            </button>
          </NavLink>
          <ul>
            {new Array(state.counterLife).fill(1).map((_, index) => (
              <li key={index} />
            ))}
          </ul>
          <div>
            <span>Очки:</span>
            {state.counter}
          </div>
        </Statistics>
      </Container>
      <CardTimer>
        <VerifiableWord>
          <div>
            {state.enWords.map((verifiable) => (
              <input
                disabled={verifiable.isDisabled}
                style={{ opacity: verifiable.isDisabled ? 0.7 : 1 }}
                type="button"
                key={`${verifiable.wordTranslate}${verifiable.id} `}
                data-value={verifiable.word}
                onClick={(e) => hendlerCheck(e)}
                value={verifiable.word}
              />
            ))}
          </div>
        </VerifiableWord>
        <Timer>
          <span>{state.seconds}</span>
        </Timer>
        <TranslationWords>
          <div>
            {state.ruWords.map((translaation) => (
              <input
                style={{ opacity: translaation.isDisabled ? 0.7 : 1 }}
                disabled={translaation.isDisabled}
                type="button"
                key={`${translaation.word}${translaation.id}`}
                data-value={translaation.word}
                onClick={(e) => hendlerCheckTranslition(e)}
                value={translaation.wordTranslate}
              />
            ))}
          </div>
        </TranslationWords>
      </CardTimer>
    </GameContainer>
  );
};

export default Game2;
