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
import { useSelector } from "react-redux";
import MiniGamesLoader from "./MiniGamesLoader";
import {shuffleWords} from "../../helpers/WordsShuffler";
import {MemoryGameInitialStateType, MemoryGameInitialState} from './MiniGamesStateType';
import {loadAudio, loadFailedAudio} from "../../helpers/AudioPlayer";
import {guessWord} from "../../helpers/WordGuesser";
import MiniGameStatistics from "./MiniGamesStatistics";
import MiniGamesGameOver from "./MiniGamesGameOver";
import MiniGamesSettingsButton from "./MiniGamesSettingsButton";
import MiniGamesSettingsWindows from "./MiniGamesSettingsWindows";

const GameContainer = styled.div`
  background: url(${MemoryGameInitialState.gameBackground}) center center/cover no-repeat fixed;
  height: 100%;
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
    display: block;
    &:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
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
  flex: 6 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VerifiableWord = styled.div<Partial<MemoryGameInitialStateType>>`
  background-color: rgba(0, 4, 255, 0.5);
  border-radius: 20px;
  padding: 10px 1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input {
    display: block;
    background-image: linear-gradient(
      to right,
      #f857a6 0%,
      #ff5858 51%,
      #f857a6 100%
    );
    opacity: ${(p) => p.opacity};
    display: flex;
    width: 13rem;
    padding: 20px 0.3rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
    display: block;
    margin: 3px;
    color: white;
    box-shadow: 0 0 20px #eee;
    &:hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
    }
    @media (max-width: 1294px) {
      width: 9rem;
      font-size: 0.8;
    }
    @media (max-width: 993px) {
      width: 7rem;
      font-size: 0.6rem;
      text-transform: lowercase;
    }
  }
`;
const TranslationWords = styled.div<Partial<MemoryGameInitialStateType>>`
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 20px;
  padding: 10px 1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  input {
    display: block;
    background-image: linear-gradient(
      to right,
      #4b6cb7 0%,
      #233963 51%,
      #4b6cb7 100%
    );
    opacity: ${(p) => p.opacity};
    display: flex;
    width: 13rem;
    padding: 20px 0.3rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
    display: block;
    margin: 3px;
    color: white;
    word-break: keep-all;
    box-shadow: 0 0 20px #eee;
    word-break: break-all;
    &:hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
    }
    @media (max-width: 1294px) {
      width: 9rem;
      font-size: 0.8;
    }
    @media (max-width: 993px) {
      width: 7rem;
      font-size: 0.6rem;
      text-transform: lowercase;
    }
  }
`;

const Game3: React.FC = () => {
  const status = useSelector(getRequestStatus);
  //const [words, changeWords] = MiniGamesWordsFetcher();
  const words = MiniGamesWordsFetcher();
  let guessedWords = useRef<string[]>([]);
  let faildAudio = new Audio("audio/faild.mp3");
  // const group = MiniGamesWordsGroup();
  // const page = MiniGamesWordsPage();
  type Action = {
    type: keyof MemoryGameInitialStateType;
    value: MemoryGameInitialStateType[keyof MemoryGameInitialStateType];
  };
  function reducer(state: MemoryGameInitialStateType, action: Action) {
    return { ...state, [action.type]: action.value };
  }
  const [state, dispatch] = useReducer(reducer, MemoryGameInitialState);
  useEffect(() => {
    if (status === "succeeded") {
      let myInterval = setInterval(() => {
        if (state.seconds > 0) {
          dispatch({ type: "seconds", value: state.seconds - 1 });
        } else clearInterval(myInterval);
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  useEffect(() => {
    const wordsCopy = [...words].splice(10);
    const enWords = shuffleWords(wordsCopy).map((obj) => ({
      ...obj,
      isDisabled: false,
    }));
    const ruWords = shuffleWords(wordsCopy).map((obj) => ({
      ...obj,
      isDisabled: false,
    }));
    dispatch({ type: "enWords", value: enWords });
    dispatch({ type: "ruWords", value: ruWords });
  }, [words]);

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
      if (!guessedWords.current.includes(state.verifiableValue))
        guessedWords.current.push(state.verifiableValue);
    } else {
      dispatch({ type: "counterLife", value: state.counterLife - 1 });
      faildAudio.play();
    }
    dispatch({ type: "isClickedTranslitionButton", value: false });
    dispatch({ type: "isClickedVerifiableButton", value: false });
  }

  const newGame = () => {
    //changeWords();
    dispatch({ type: "counterLife", value: 5 });
    dispatch({ type: "seconds", value: 60 });
    dispatch({ type: "counter", value: 0 });
    guessedWords.current = [];
    dispatch({
      type: "enWords",
      value: state.enWords.map((el) => ({ ...el, isDisabled: false })),
    });
    dispatch({
      type: "ruWords",
      value: state.ruWords.map((el) => ({ ...el, isDisabled: false })),
    });
  };

  return (
      <GameContainer id="game">
        {(state.counterLife < 1 ||
            state.seconds === 0 ||
            state.counter === 10) && (
            <MiniGamesGameOver
                guessedWords={guessedWords}
                repeatGameAction={newGame}
                gameOverBackground={MemoryGameInitialState.gameOverBackground}
            />
        )}
        {(status === "loading") && (
            <MiniGamesLoader/>
        )}
        <Container>
          <GameControls showSettingWindow={false}/>
          <MiniGameStatistics
              counterLife={state.counterLife}
              index={-1}
              counter={state.counter}
          />
        </Container>
        <CardTimer>
          <VerifiableWord>
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
          </VerifiableWord>
          <Timer>
            <span>{state.seconds}</span>
          </Timer>
          <TranslationWords>
            {state.ruWords.map((translation) => (
                <input
                    style={{ opacity: translation.isDisabled ? 0.7 : 1 }}
                    disabled={translation.isDisabled}
                    type="button"
                    key={`${translation.word}${translation.id}`}
                    data-value={translation.word}
                    onClick={(e) => hendlerCheckTranslition(e)}
                    value={translation.wordTranslate}
                />
            ))}
          </TranslationWords>
        </CardTimer>
      </GameContainer>
  );
};

export default Game3;