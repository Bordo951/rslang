import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from '../redux/wordsSlice';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  SideMenu,
  TopMenu,
  WordsSlider,
} from '../components/electronicTextbook';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;
const ElectronicTextbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchWordsData(groupNum, currentPage));
  }, [currentPage]);
  const words = useSelector(getWordsData);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();

  const groupNum = words[0]?.group;
  const pageNum = words[0]?.page;

  console.log(words, status);
  const handleNextPage = (groupNum: number, pageNum: number) => {
    pageNum !== 29
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage);
  };
  const handlePrevPage = (groupNum: number, pageNum: number) => {
    pageNum !== 0
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage);
  };
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {/* {status === 'succeeded' && words !== null && ( */}
      <Router>
        <Container>
          <TopMenu />
          <WordsSlider />
          {words.map((word) => {
            return <div>{word.word}</div>;
          })}
          <div>
            <button onClick={() => handleNextPage(groupNum, pageNum)}>
              nextPage
            </button>
            <button onClick={() => handlePrevPage(groupNum, pageNum)}>
              PrevPage
            </button>
          </div>
        </Container>

        <SideMenu />
      </Router>
      {/* )} */}
    </div>
  );
};

export default ElectronicTextbook;
