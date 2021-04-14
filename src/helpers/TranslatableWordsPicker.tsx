import {WordType} from "../redux/wordsSlice";

export function pickTranslatableWords(words: WordType[], stateIndex: number) {
    const currentWords = [...words];
    const arrWords = [currentWords.splice(stateIndex, 1)[0]];
    const variationLimit = 4;
    const wordsLimit = 20;

    if (stateIndex !== wordsLimit) {
        while (arrWords.length < variationLimit) {
            const startedIndex = Math.floor(Math.random() * (currentWords.length - 1));
            const wordTranslate = currentWords.splice(startedIndex, 1)[0];

            arrWords.push(wordTranslate);
        }
    }

    return arrWords;
}
