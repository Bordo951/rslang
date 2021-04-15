import React, {useCallback, useEffect, useReducer, useRef} from "react";
import {MiniGamesStateType, SavannahGameInitialState, MiniGamesAction} from './MiniGamesStateType';
import {shuffleWords} from '../../helpers/WordsShuffler';
import {pickTranslatableWords} from '../../helpers/TranslatableWordsPicker';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {
    getWordsData,
    fetchWordsData,
    // getErrorMessage,
    getRequestStatus,
} from "../../redux/wordsSlice";
import MiniGamesWordsFetcher, {
    MiniGamesWordsGroup,
    MiniGamesWordsPage,
} from "./MiniGamesWordsFetcher";
import {loadAudio, loadFailedAudio} from "../../helpers/AudioPlayer";
import {guessWord} from "../../helpers/WordGuesser";
import MiniGameStatistics from "./MiniGamesStatistics";
import MiniGamesGameOver from "./MiniGamesGameOver";
import MiniGamesLoader from "./MiniGamesLoader";
import MiniGamesSettingsWindows from "./MiniGamesSettingsWindows";
import MiniGamesSettingsButton from "./MiniGamesSettingsButton";

const GameContainer = styled.div` 
  background: url(${SavannahGameInitialState.gameBackground}) center center/cover no-repeat;
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

const ButtonClose = styled.button`
  height: 2.8rem;
`;

const Words = styled.div<Partial<MiniGamesStateType>>`
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
  animation: ${(p) => {
    return p.isTurnOn ? `down linear ${p.speed}s` : "";
}};

  @keyframes down {
    0% {
      top: -2%;
    }

    100% {
      top: 80%;
    }
  }
`;


const SavannahGamePage: React.FC = () => {
    const status = useSelector(getRequestStatus);
    let guessedWords = useRef<string[]>([]);

    // const group = MiniGamesWordsGroup();
    // const page = MiniGamesWordsPage();
    //const words = MiniGamesWordsFetcher();
    //const [words, changeWords] = MiniGamesWordsFetcher();
    const words = MiniGamesWordsFetcher();
    console.log('dataWords for Game 1', words);

    function reducer(state: MiniGamesStateType, action: MiniGamesAction) {
        return {...state, [action.type]: action.value};
    }

    const [state, dispatch] = useReducer(reducer, SavannahGameInitialState);

    useEffect(() => {
        addAnimation();
        if (!words.length) return;

        let translatableWords = pickTranslatableWords(words, state.index);
        let verifiableWords = words[state.index]?.word;
        let verifiableWordsAudio = words[state.index]?.audio;

        dispatch({type: "translatableWords", value: translatableWords});
        dispatch({type: "verifiableWords", value: verifiableWords});
        dispatch({type: "verifiableWordsAudio", value: verifiableWordsAudio});
    }, [state.index, state.counter, words]);

    let wordAudio = loadAudio(state.verifiableWordsAudio);
    let faildAudio = loadFailedAudio();

    const handleSuccessGuess = () => {
        dispatch({type: "counter", value: state.counter + 1});
        dispatch({type: "index", value: state.index + 1});
        state.isMusic ? wordAudio.play() : wordAudio.pause();
        guessedWords.current.push(state.verifiableWords);
    };

    const handleFailedGuess = () => {
        state.isMusic ? faildAudio.play() : faildAudio.pause();
        dispatch({type: "counterLife", value: state.counterLife - 1});
        if (state.counter > 0) {
            dispatch({type: "counter", value: state.counter - 1});
        } else {
            state.counter = 0;
        }
    };

    const repeatGame = () => {
        dispatch({type: "counterLife", value: 5});
        dispatch({type: "index", value: 0});
        dispatch({type: "counter", value: 0});
        guessedWords.current = [];
    };

    const handleClick = (e: any) => {
        guessWord(e, state, handleSuccessGuess.bind(this), handleFailedGuess.bind(this));
    };

    const addAnimation = () => {
        dispatch({type: "isTurnOn", value: true});
    };

    if (state.isWordDown === true) {
        state.isMusic ? faildAudio.play() : faildAudio.pause();
        dispatch({type: "counterLife", value: state.counterLife - 1});
        if (state.counter > 0) {
            dispatch({type: "counter", value: state.counter - 1});
        } else {
            state.counter = 0;
        }
        dispatch({type: "isWordDown", value: false});
    }

    const showSettingWindow = () => {
        dispatch({type: "isSettingsWindow", value: true});
        dispatch({type: "isTurnOn", value: false});
    };

    const checkOnlyOne = (e: any) => {
        dispatch({type: "speed", value: e.target.value});
        dispatch({type: "idSpeed", value: e.target.id});
    };

    const switchMusic = () => {
        dispatch({type: "isMusic", value: !state.isMusic});
    };

    const closeSettingWindow = () => {
        dispatch({type: "isSettingsWindow", value: false});
        dispatch({type: "isTurnOn", value: true});
    };

    const Word = useCallback(() => {
        if (status !== "loading" && state.counterLife >= 1) {
            return (
                <Words
                    speed={state.speed}
                    isTurnOn={state.isTurnOn}
                    onAnimationEnd={() => {
                        dispatch({type: "isWordDown", value: true});
                    }}
                >
                    <span>{state.verifiableWords}</span>
                </Words>
            );
        } else {
            return null;
        }
    }, [state, status]);
    return (
        <GameContainer id="game">
            {(state.counterLife < 1 || state.index === 20) && (
                <MiniGamesGameOver
                    guessedWords={guessedWords}
                    repeatGameAction={repeatGame}
                    gameOverBackground={SavannahGameInitialState.gameOverBackground}
                />
            )}
            {(status === "loading") && (
                <MiniGamesLoader/>
            )}
            {state.index !== 20 && <Word/>}
            <Container>
                <MiniGamesSettingsButton handleClickOnButton={() => {
                    showSettingWindow()
                }}/>
                {state.isSettingsWindow && (
                    <MiniGamesSettingsWindows
                        idSpeed={state.idSpeed}
                        handleSpeedChange={checkOnlyOne}
                        isMusic={state.isMusic}
                        handleSwitchMusic={switchMusic}
                        closeSettingWindow={closeSettingWindow}
                    />
                )}
                <MiniGameStatistics
                    counterLife={state.counterLife}
                    index={state.index}
                    counter={state.counter}
                />
            </Container>
            <AnswerWord>
                {shuffleWords(state.translatableWords).map((word) => (
                    <input
                        type="button"
                        key={`${word.word}${words[state.index]}`}
                        value={word.wordTranslate}
                        data-value={word.word}
                        onClick={(e) => {
                            addAnimation();
                            handleClick(e);
                        }}
                    />
                ))}
            </AnswerWord>
        </GameContainer>
    );
};

export default SavannahGamePage;
