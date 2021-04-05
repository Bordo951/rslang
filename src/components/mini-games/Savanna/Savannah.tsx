import React, { useEffect, useReducer, useRef } from "react";
import { WordType } from "../../../redux/wordsSlice";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from "../../../redux/wordsSlice";
import { NavLink, useRouteMatch } from "react-router-dom";
import { VscSettingsGear } from "react-icons/vsc";
import { Button, Form, Spinner } from "react-bootstrap";
const Page = styled.div`
  background: url(/images/Savannah.jpg) center center/cover no-repeat fixed;
  height: 100vh;
  position: relative;
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
const AnswerWord = styled.div`
  display: flex;
  height: 60%;
  align-items: flex-end;
  justify-content: space-around;

  input {
    background-image: linear-gradient(
      to right,
      #7ed8f3 0%,
      blue 51%,
      #e7af76 100%
    );
    padding: 8px 0.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 10px #62a5f1;
    border-radius: 10px;
    display: block;
    outline: none;
    &:hover {
      background-position: right center;
      color: #ca3333;
      text-decoration: none;
    }
  }
`;

const SettingsBtn = styled.div`
  display: flex;
  flex-direction: column;
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

const randomGroup = Math.floor(Math.random() * 5);
const randomPage = Math.floor(Math.random() * 28);

const SavannahGamePage: React.FC = () => {
  let match = useRouteMatch();
  const words = useSelector(getWordsData);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatchWordCard = useDispatch();
  const pageId = randomPage;
  const goupe = randomGroup;
  const address = "https://vhoreho-rslang.herokuapp.com/";
  const guessedWords: string[] = [];
  console.log("🔥", status === "loading");
  const initialState = {
    index: 0,
    verifiableWords: " ",
    arrWords: [],
    counter: 0,
    verifiableWordsAudio: "",
    isTurnOn: false,
    isWordDown: false,
    counterLife: 5,
    isMusic: true,
    speed: 8,
    idSpeed: " ",
    isSettingsWindow: false,
  };

  type stateType = {
    index: number;
    verifiableWords: string;
    arrWords: WordType[];
    counter: number;
    verifiableWordsAudio: string;
    isTurnOn: boolean;
    isWordDown: boolean;
    counterLife: number;
    isMusic: boolean;
    speed: number;
    idSpeed: string;
    isSettingsWindow: boolean;
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
    dispatchWordCard(fetchWordsData(goupe, pageId));
    addAnimation();
  }, []);

  useEffect(() => {
    if (!words.length) return;
    const wordsCopy = [...words];
    const arrWords = [wordsCopy.splice(state.index, 1)[0]];
    while (arrWords.length < 4) {
      const wordTranslate = wordsCopy.splice(
        Math.floor(Math.random() * (wordsCopy.length - 1)),
        1
      )[0];
      arrWords.push(wordTranslate);
    }
    dispatch({ type: "arrWords", value: arrWords });
    dispatch({ type: "verifiableWords", value: words[state.index]?.word });
    dispatch({
      type: "verifiableWordsAudio",
      value: words[state.index]?.audio,
    });
  }, [state.index, words]);

  const shuffle = (arr: WordType[]) => {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };

  const speed = `${state.speed}s`;
  let wordAudio = new Audio(`${address}${state.verifiableWordsAudio}`);
  let faildAudio = new Audio("audio/faild.mp3");
  const hendlerClick = (e: any) => {
    if (state.verifiableWords === e.target.attributes[1].value) {
      dispatch({ type: "counter", value: state.counter + 1 });
      dispatch({ type: "index", value: state.index + 1 });
      state.isMusic ? wordAudio.play() : wordAudio.pause();

      guessedWords.push(state.verifiableWords);
    } else if (state.verifiableWords !== e.target.attributes[1].value) {
      state.isMusic ? faildAudio.play() : faildAudio.pause();
      dispatch({ type: "counterLife", value: state.counterLife - 1 });
      if (state.counter > 0) {
        dispatch({ type: "counter", value: state.counter - 1 });
      } else {
        state.counter = 0;
      }
    }
    console.log("🔥", guessedWords);
  };

  const Statistics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(10, 10, 10, 0.308);
    width: 23%;
    ul {
      margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
      width: ${state.counterLife * 2.5}rem;
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

  const Words = styled.div`
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px rgb(124, 213, 235) solid;
    height: calc(max-content + 3rem);
    width: max-content;
    border-radius: 10%;
    background-color: rgba(20, 70, 82, 0.856);
    color: rgb(245, 245, 245);
    padding: 0 0.2rem;
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translate(-50%, 0);
    animation: ${state.isTurnOn ? `down linear ${speed}` : ""};

    @keyframes down {
      0% {
        top: -30%;
      }

      100% {
        top: 60%;
      }
    }
  `;

  const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(7, 6, 5, 0.322);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
    }
  `;

  const addAnimation = () => {
    dispatch({ type: "isTurnOn", value: true });
  };

  const checkOnlyOne = (e: any) => {
    dispatch({ type: "speed", value: e.target.value });
    dispatch({ type: "idSpeed", value: e.target.id });
  };
  if (state.isWordDown === true) {
    state.isMusic ? faildAudio.play() : faildAudio.pause();
    dispatch({ type: "counterLife", value: state.counterLife - 1 });
    if (state.counter > 0) {
      dispatch({ type: "counter", value: state.counter - 1 });
    } else {
      state.counter = 0;
    }
    dispatch({ type: "isWordDown", value: false });
  }

  const switchMusic = (e: any) => {
    dispatch({ type: "isMusic", value: !state.isMusic });
  };

  const showSettingWindow = () => {
    dispatch({ type: "isSettingsWindow", value: true });
    dispatch({ type: "isTurnOn", value: false });
  };
  const closeSettingWindow = () => {
    dispatch({ type: "isSettingsWindow", value: false });
    dispatch({ type: "isTurnOn", value: true });
  };

  return (
    <Page>
      {status === "loading" && (
        <Loading>
          <div>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
          <div>Loading...</div>
        </Loading>
      )}
      <Words
        onAnimationEnd={() => {
          dispatch({ type: "isWordDown", value: true });
        }}
      >
        <span>{state.verifiableWords}</span>
      </Words>
      <Container>
        <SettingsBtn>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => showSettingWindow()}
          >
            <div className="d-flex align-items-center">
              <VscSettingsGear />
              Settings
            </div>
          </button>
        </SettingsBtn>
        {state.isSettingsWindow && (
          <SettingsWindow>
            Скорость игры:
            <Form>
              <Form.Check
                checked={state.idSpeed === "beginner"}
                type="radio"
                id="beginner"
                value="60"
                label="Начинающий"
                onChange={(e) => checkOnlyOne(e)}
              />

              <Form.Check
                checked={state.idSpeed === "midle"}
                type="radio"
                id="midle"
                value="8"
                label="Средний"
                onChange={(e) => checkOnlyOne(e)}
              />
              <Form.Check
                checked={state.idSpeed === "high"}
                type="radio"
                value="4"
                id="high"
                label="Полиглот"
                onChange={(e) => checkOnlyOne(e)}
              />
            </Form>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Music"
                checked={state.isMusic}
                onChange={(e) => switchMusic(e)}
              />
            </Form>
            <Button variant="success" onClick={() => closeSettingWindow()}>
              OK
            </Button>
          </SettingsWindow>
        )}
        <Titile>Саванна</Titile>
        <Statistics>
          <NavLink to="/mini-games/" data-name="Mini Games">
            <button type="button" className="btn btn-danger">
              <VscChromeClose />
            </button>
          </NavLink>

          <ul>{new Array(state.counterLife).fill(<li />)}</ul>
          <div>
            <span>Слов:</span>
            {state.index + 1} / 20
          </div>
          <div>
            <span>Очки:</span>
            {state.counter}
          </div>
        </Statistics>
      </Container>
      <AnswerWord>
        {shuffle(state.arrWords).map((word) => (
          <input
            type="button"
            key={`${word.word}${words[state.index].id}`}
            value={word.wordTranslate}
            data-value={word.word}
            onClick={(e) => {
              addAnimation();
              hendlerClick(e);
            }}
          />
        ))}
      </AnswerWord>
    </Page>
  );
};

export default SavannahGamePage;
