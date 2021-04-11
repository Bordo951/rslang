import React, { useCallback, useEffect, useReducer, useState } from "react";
import GameControls from "./GameControls";
import styled from "styled-components";
import {
  MiniGamesWordsFetcher,
  MiniGamesWordsGroup,
  MiniGamesWordsPage,
} from "./MiniGamesWordsFetcher";
import { VscChromeClose, VscSettingsGear } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { WordType } from "../../redux/wordsSlice";

const GameContainer = styled.div`
  background: url(/images/brain.jpg) center center/cover no-repeat fixed;
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
const VerifiableWord = styled.div`
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
const TranslationWords = styled.div`
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

type stateType = {
  seconds: number;
  arrWords: WordType[];
  counter: number;
  counterLife: number;
  translitionValue: string;
  verifiableValue: string;
  isClickedTranslitionButton: boolean;
  isClickedVerifiableButton: boolean;
  arrEngWords:[string];
arrRuWords:[string];
};
const Game2: React.FC = () => {
  // const group = MiniGamesWordsGroup();
  // const page = MiniGamesWordsPage();
  const words = MiniGamesWordsFetcher();
  const initialState: stateType = {
    arrWords: [],
    seconds: 60,
    counter: 0,
    counterLife: 5,
    translitionValue: "",
    verifiableValue: "",
    isClickedTranslitionButton: false,
    isClickedVerifiableButton: false,
    arrEngWords:[''],
    arrRuWords:[''],
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
    if (!words.length) return;
    const wordsCopy = [...words];
    dispatch({ type: "arrWords", value: wordsCopy.splice(10) });
  }, [words]);

  const hendlerCheck = (e: any) => {
    dispatch({ type: "verifiableValue", value: e.target.attributes[0].value });
    dispatch({ type: "isClickedVerifiableButton", value: true });
  };
  const hendlerCheckTranslition = (e: any) => {
    dispatch({ type: "translitionValue", value: e.target.attributes[0].value });
    dispatch({ type: "isClickedTranslitionButton", value: true });
  };

  if (state.isClickedTranslitionButton && state.isClickedVerifiableButton) {
    if (state.verifiableValue === state.translitionValue) {
      dispatch({ type: "counter", value: state.counter + 1 });
      // console.log("🔥");
    } else {
      dispatch({ type: "counterLife", value: state.counterLife - 1 });
    }
    dispatch({ type: "isClickedTranslitionButton", value: false });
    dispatch({ type: "isClickedVerifiableButton", value: false });
  }

  const shuffle = useCallback(
    (arr: WordType[]) => {
      let j, temp;
      for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    },
    [state.counter]
  );

  return (
    <GameContainer>
      <Container>
        <SettingsBtn>
          <button
            type="button"
            className="btn btn-dark"
            // onClick={() => showSettingWindow()}
          >
            <div className="d-flex align-items-center">
              <VscSettingsGear />
              Settings
            </div>
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
            {shuffle(state.arrWords).map((verifiable) => (
              <input
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
            {shuffle(state.arrWords).map((translaation) => (
              <input
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
