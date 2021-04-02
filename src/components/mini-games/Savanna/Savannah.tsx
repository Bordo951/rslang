import React, { useEffect, useReducer } from 'react';
import { WordType } from '../../../redux/wordsSlice';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData, getErrorMessage, getRequestStatus } from '../../../redux/wordsSlice';
import { useRouteMatch } from 'react-router-dom';
import { GrMusic } from 'react-icons/gr';

const Page = styled.div`
  background: url(/images/Savannah.jpg) center center/cover no-repeat fixed;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  button{
    height:2rem;
    width: 2rem;
    background-image: linear-gradient(to right, #1c2122 0%, gray 51%, #ece9e6 100%);
    padding: 0.2rem 0.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 10px #b6b8b9;
    border-radius: 10px;
    display: block;
    outline:none;
 &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #f10e0e;
    text-decoration: none;
  }
  }
`;
const Titile = styled.h3`
  font-size: 3rem;
  font-weight: 900;
  font-family: 'BubblegumSans-Regular';
  color: rgb(0, 206, 209);
  text-shadow: 3px 2px 3px rgb(2, 2, 2);
`;
const AnswerWord = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  input {
    background-image: linear-gradient(to right, #7ed8f3 0%, blue 51%, #ece9e6 100%);
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
      background-position: right center; /* change the direction of the change here */
      color: #ca3333;
      text-decoration: none;
    }
  }

  /* ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    display: inline-block;
    width: max-content;
    border: 1px black solid;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.808);
    padding: 2px 0.2rem;
    &:hover {
      transform: scale(1.1);
      background-color: #ffffff;
      cursor: pointer;
    }
  } */
`;
const Statistics = styled.div``;

const Words = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px rgb(124, 213, 235) solid;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(149, 223, 241, 0.856);
  position: absolute;
  left: 50%;
  top: -15%;
  transform: translate(-50%, 0);
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
  const address = 'https://vhoreho-rslang.herokuapp.com/';
  const guessedWords: string[] = [];
  const initialState = {
    index: 0,
    verifiableWords: ' ',
    arrWords: [],
    counter: 0,
    verifiableWordsAudio: '',
    turnOn: false,
  };

  type stateType = {
    index: number;
    verifiableWords: string;
    arrWords: WordType[];
    counter: number;
    verifiableWordsAudio: string;
    turnOn: boolean;
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
      const wordTranslate = wordsCopy.splice(Math.floor(Math.random() * (wordsCopy.length - 1)), 1)[0];
      arrWords.push(wordTranslate);
    }
    dispatch({ type: 'arrWords', value: arrWords });
    dispatch({ type: 'verifiableWords', value: words[state.index]?.word });
    dispatch({ type: 'verifiableWordsAudio', value: words[state.index]?.audio });
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

  let wordAudio = new Audio(`${address}${state.verifiableWordsAudio}`);
  const hendlerClick = (e: any) => {
    if (state.verifiableWords === e.target.attributes[1].value) {
      dispatch({ type: 'counter', value: state.counter + 1 });
      dispatch({ type: 'index', value: state.index + 1 });
      wordAudio.play();

      guessedWords.push(state.verifiableWords);
    } else {
      if (state.counter > 0) {
        dispatch({ type: 'counter', value: state.counter - 1 });
      } else {
        state.counter = 0;
      }
    }
    console.log('🔥', guessedWords);
  };
  const Words = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px rgb(124, 213, 235) solid;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background-color: rgba(149, 223, 241, 0.856);
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translate(-50%, 0);
    animation: down 10s linear;

    @keyframes down {
      0% {
        top: -30%;
      }

      100% {
        top: 60%;
      }
    }
  `;

  const addAnimation = () => {
    dispatch({ type: 'turnOn', value: true });
  };
  return (
    <Page>
      {state.turnOn && (
        <Words onMouseDown={() => addAnimation()}>
          <span>{state.verifiableWords}</span>
        </Words>
      )}
      <Container>
        <button>
          <GrMusic />
        </button>
        <Titile>Саванна</Titile>
        <Statistics>
          <button type="button" className="btn btn-danger">
            <VscChromeClose />
          </button>
          <ul>
            <li>life</li>
          </ul>
          <div>{state.index + 1}/20</div>
          <div>{state.counter}</div>
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
