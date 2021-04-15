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
import MiniGamesSettingsButton from "./MiniGamesSettingsButton";
import MiniGamesSettingsWindows from "./MiniGamesSettingsWindows";

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
    display: block;
    outline: none;
    &:hover {
      background-position: right center;
      color: #f10e0e;
      text-decoration: none;
    }
`;

const Game2: React.FC = () => {
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
    }, [state.index, state.counter, words]);

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
        //playSound();
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

    //playSound();

    return <div>
        <GameContainer id="game">
            {(state.counterLife < 1 || state.index === 20) && (
                <MiniGamesGameOver
                    guessedWords={guessedWords}
                    repeatGameAction={repeatGame}
                    gameOverBackground={AudioGameInitialState.gameOverBackground}
                />
            )}
            <Container>
            <GameControls/>
            {/*<MiniGamesSettingsButton handleClickOnButton={() => {*/}
            {/*    showSettingWindow()*/}
            {/*}}/>*/}
            {state.isSettingsWindow && (
                <MiniGamesSettingsWindows
                    idSpeed={state.idSpeed}
                    handleSpeedChange={checkOnlyOne}
                    isMusic={state.isMusic}
                    handleSwitchMusic={switchMusic}
                    closeSettingWindow={closeSettingWindow}
                />
            )}

            <button onClick={() => playSound()}>Play Sound</button>
            <br/>
            {shuffleWords(state.translatableWords).map((word) => (
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
            <MiniGameStatistics
                counterLife={state.counterLife}
                index={state.index}
                counter={state.counter}
            />
            </Container>
        </GameContainer>
    </div>;
};

export default Game2;