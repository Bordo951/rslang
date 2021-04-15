import {WordType} from "../redux/wordsSlice";

export const shuffleWords = (words: WordType[]) => {
    let randomIndex, tempWord;

    for (let stepIndex = words.length - 1; stepIndex > 0; stepIndex--) {
        randomIndex = Math.floor(Math.random() * (stepIndex + 1));
        tempWord = words[randomIndex];
        words[randomIndex] = words[stepIndex];
        words[stepIndex] = tempWord;
    }

    return words;
};