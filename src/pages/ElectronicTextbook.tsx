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
import { HashRouter } from 'react-router-dom';
import {
  SideMenu,
  TopMenu,
  WordsSlider,
} from '../components/electronicTextbook';
import MainPage from "./MainPage";
import MiniGames from "./MiniGames";
import Settings from "./Settings";
import Statistics from "./Statistics";
import {Group1, Group2, Group3, Group4, Group5, Group6} from "../components/electronicTextbook/groups";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Main = styled.main`
  background: #F0F3F3;

  .section-title {
    background-image: url('/assets/images/section-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px 0;
    
    h2 {
      text-align: center;
      font-family: 'Bubblegum Sans',cursive,sans-serif;
      font-size: 36px;
      font-weight: 600;
      color: #fff;
      margin: 0;
    }
  }
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
      <Main>
        <section className='section-title'>
          <h2>Electronic textbook</h2>
        </section>
        <TopMenu/>
      </Main>
      {/*{status === 'loading' && <div>Loading...</div>}*/}
      {/*{status === 'failed' && <div>{error}</div>}*/}
      {/* {status === 'succeeded' && words !== null && ( */}
      <HashRouter>
        {/*<TopMenu/>*/}
        <Switch>
          <Route path='/text-book/group=1'>
            <Group1 />
          </Route>
          <Route path='/text-book/group=2'>
            <Group2 />
          </Route>
          <Route path='/text-book/group=3'>
            <Group3 />
          </Route>
          <Route path='/text-book/group=4'>
            <Group4 />
          </Route>
          <Route path='/text-book/group=5'>
            <Group5 />
          </Route>
          <Route path='/text-book/group=6'>
            <Group6 />
          </Route>
        </Switch>
        <Container>
          {/*<WordsSlider />*/}
          {/*{words.map((word) => {*/}
          {/*  return <div>{word.word}</div>;*/}
          {/*})}*/}
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
      </HashRouter>
      {/* )} */}
    </div>
  );
};

export default ElectronicTextbook;
