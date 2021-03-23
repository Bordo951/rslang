import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../redux/wordsSlice';
import { getWordData, fetchWordData } from '../redux/wordSlice';

const ElectronicTextbook: React.FC = () => {
  const words = useSelector(getWordsData);
  const word = useSelector(getWordData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWordData('5e9f5ee35eb9e72bc21af4a8'));
  }, [dispatch]);

  console.log(words);
  console.log(word);
  return <div>ElectronicTextbook</div>;
};

export default ElectronicTextbook;
