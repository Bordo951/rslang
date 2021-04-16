import React, {useEffect, useReducer, useRef} from 'react';
import GameControls from "./GameControls";
import styled from "styled-components";
import {MiniGamesWordsFetcher, MiniGamesWordsGroup, MiniGamesWordsPage} from "./MiniGamesWordsFetcher";
import {
    AudioGameInitialState,
    MiniGamesAction,
    MiniGamesStateType
} from "./MiniGamesStateType";
import {pickTranslatableWords} from "../../helpers/TranslatableWordsPicker";
import {shuffleWords} from "../../helpers/WordsShuffler";
import {loadAudio, loadFailedAudio} from "../../helpers/AudioPlayer";
import {guessWord} from "../../helpers/WordGuesser";
import MiniGameStatistics from "./MiniGamesStatistics";
import MiniGamesGameOver from "./MiniGamesGameOver";

import MiniGamesSettingsWindows from "./MiniGamesSettingsWindows";
import MiniGamesLoader from "./MiniGamesLoader";
import {useSelector} from "react-redux";
import {getRequestStatus} from "../../redux/wordsSlice";

const GameContainer = styled.div` 
  background: url(${AudioGameInitialState.gameBackground}) center center/cover no-repeat;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 10px #b6b8b9;
    border-radius: 10px;
    outline: none;
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

const Game2: React.FC = () => {
    const status = useSelector(getRequestStatus);
    const group = MiniGamesWordsGroup();
    const page = MiniGamesWordsPage();
    const words = MiniGamesWordsFetcher();
    let wordAudio: any;
    let faildAudio = loadFailedAudio();
    let guessedWords = useRef<string[]>([]);

    console.log('dataWords for Game 2', words);

    function reducer(state: MiniGamesStateType, action: MiniGamesAction) {
        return {...state, [action.type]: action.value};
    }

    const [state, dispatch] = useReducer(reducer, AudioGameInitialState);


    useEffect(() => {
        if (!words.length) return;

        let translatableWords = pickTranslatableWords(words, state.index);
        let verifiableWords = words[state.index]?.word;
        let verifiableWordsAudio = words[state.index]?.audio;

        dispatch({type: "translatableWords", value: translatableWords});
        dispatch({type: "verifiableWords", value: verifiableWords});
        dispatch({type: "verifiableWordsAudio", value: verifiableWordsAudio});

        if (status === "succeeded") {
            let myInterval = setInterval(() => {
                if (state.seconds >= 0) {
                    dispatch({ type: "seconds", value: state.seconds--});
                    if(state.seconds % 10 === 3) {
                        playSound();
                    }
                } else clearInterval(myInterval);
            }, 1000);
            return () => {
                clearInterval(myInterval);
            };
        }
    }, [state.index, state.counter, words, state.seconds]);

    const playSound = () => {
        if (state.verifiableWordsAudio) {
            wordAudio = loadAudio(state.verifiableWordsAudio);
            console.log('play wordAudio', wordAudio);
            state.isMusic ? wordAudio.play() : wordAudio.pause();
        }
    };

    const handleSuccessGuess = () => {
        dispatch({type: "counter", value: state.counter + 1});
        dispatch({type: "index", value: state.index + 1}); // get new word
        //state.isMusic ? wordAudio.play() : wordAudio.pause();
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

    const handleClick = (e: any) => {
        guessWord(e, state, handleSuccessGuess.bind(this), handleFailedGuess.bind(this));
    };

    const repeatGame = () => {
        dispatch({type: "counterLife", value: 5});
        dispatch({ type: "seconds", value: 60 });
        dispatch({type: "index", value: 0});
        dispatch({type: "counter", value: 0});
        guessedWords.current = [];
    };

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

    return <div>
        <GameContainer id="game">
            {(state.counterLife < 1 ||
                state.seconds <= 0 ||
                state.index === 20) && (
                <MiniGamesGameOver
                    guessedWords={guessedWords}
                    repeatGameAction={repeatGame}
                    gameOverBackground={AudioGameInitialState.gameOverBackground}
                />
            )}
                {state.isSettingsWindow && (
                    <MiniGamesSettingsWindows
                        idSpeed={state.idSpeed}
                        handleSpeedChange={checkOnlyOne}
                        isMusic={state.isMusic}
                        handleSwitchMusic={switchMusic}
                        closeSettingWindow={closeSettingWindow}
                    />
                )}
            {(status === "loading") && (
                <MiniGamesLoader/>
            )}
            <Container>
                <GameControls showSettingWindow={showSettingWindow}/>
                <MiniGameStatistics
                    counterLife={state.counterLife}
                    index={state.index}
                    counter={state.counter}
                />
            </Container>
            <CardTimer>
            <button onClick={() => playSound()}>Play Sound</button>
                <Timer>
                    <span>{state.seconds}</span>
                </Timer>
            <div>
            {state.translatableWords.map((word) => (
                <input
                    type="button"
                    key={`${word.word}${words[state.index]}`}
                    value={word.wordTranslate}
                    data-value={word.word}
                    onClick={(e) => {
                        handleClick(e);
                    }}
                />
            ))}
            </div>
            </CardTimer>
        </GameContainer>
    </div>;
};

export default Game2;