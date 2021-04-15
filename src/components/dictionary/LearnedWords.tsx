import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUserWords,
  getWordsData,
  getAgregatedWords,
} from '../../redux/dictionary';
import { getWordData, fetchWordData } from '../../redux/wordSlice';
import { fetchWordsData } from '../../redux/wordsSlice';

const LearnedWords: React.FC = () => {
  let userId = localStorage.getItem('userId');
  let words = useSelector(getWordsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgregatedWords(userId));
  }, []);

  console.log(words);

  return <div></div>;
};

export default LearnedWords;
