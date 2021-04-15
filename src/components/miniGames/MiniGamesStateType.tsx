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
    isSettingsWindow: false, ///images/Savannah.jpg
    gameBackground: 'https://img5.goodfon.com/original/1920x1200/4/9e/jungle-river-trees-nature-sky-art-dzhungli-reka-derevia-prir.jpg'
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
    gameBackground: 'https://img5.goodfon.com/original/1920x1200/1/30/personal-diary-memories-photos.jpg'
};

export type MiniGamesAction = {
    type: keyof MiniGamesStateType;
    value: MiniGamesStateType[keyof MiniGamesStateType];
};