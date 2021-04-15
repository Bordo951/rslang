import {WordType} from "../../redux/wordsSlice";

export type MiniGamesStateType = {
    index: number;
    verifiableWords: string;
    translatableWords: WordType[];
    verifiableWordsAudio: string;
    isTurnOn: boolean;
    isWordDown: boolean;
    counter: number;
    counterLife: number;
    isMusic: boolean;
    speed: number;
    idSpeed: string;
    isSettingsWindow: boolean;
    gameBackground: string;
    gameOverBackground: string;
};

export const SavannahGameInitialState: MiniGamesStateType = {
    index: 0,
    verifiableWords: " ",
    translatableWords: [],
    counter: 0,
    verifiableWordsAudio: "",
    isTurnOn: false,
    isWordDown: false,
    counterLife: 5,
    isMusic: true,
    speed: 8,
    idSpeed: "midle",
    isSettingsWindow: false,
    gameBackground: 'https://img5.goodfon.com/original/1920x1200/4/9e/jungle-river-trees-nature-sky-art-dzhungli-reka-derevia-prir.jpg',
    gameOverBackground: 'https://i.pinimg.com/originals/bc/8a/3f/bc8a3f3da923e06aaae99fa28bbfdce3.png'
};

export const AudioGameInitialState: MiniGamesStateType = {
    index: 0,
    verifiableWords: " ",
    translatableWords: [],
    counter: 0,
    verifiableWordsAudio: "",
    isTurnOn: false,
    isWordDown: false,
    counterLife: 5,
    isMusic: true,
    speed: 8,
    idSpeed: "midle",
    isSettingsWindow: false,
    gameBackground: 'https://img5.goodfon.com/original/1920x1200/1/30/personal-diary-memories-photos.jpg',
    gameOverBackground: 'images/Savannah.jpg'
};

export type WordTypeForButton = WordType & { isDisabled: boolean };

export type MemoryGameInitialStateType = {
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
    gameBackground: string;
    gameOverBackground: string;
};

export const MemoryGameInitialState: MemoryGameInitialStateType = {
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
    gameBackground: '/images/brain.jpg',
    gameOverBackground: 'https://stihi.ru/pics/2019/08/24/4805.jpg'
};

export type MiniGamesAction = {
    type: keyof MiniGamesStateType;
    value: MiniGamesStateType[keyof MiniGamesStateType];
};