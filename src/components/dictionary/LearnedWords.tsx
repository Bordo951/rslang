import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getWordsData, getAgregatedWords } from '../../redux/dictionary';
import { getWordData, fetchWordData } from '../../redux/wordSlice';
import { fetchWordsData } from '../../redux/wordsSlice';

const WordContiner = styled.div`
  width: 100%;
  padding: 10px;
  li {
    list-style-type: none;
  }
`;

const LearnedWords: React.FC = () => {
  let userId = localStorage.getItem('userId');
  let words = useSelector(getWordsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgregatedWords(userId));
  }, []);
  console.log(words);
  return (
    <div>
      {words.map((word) => {
        return (
          <WordContiner key={word._id}>
            <li>{word.word}</li>
          </WordContiner>
        );
      })}
    </div>
  );
};

export default LearnedWords;
