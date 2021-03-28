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
import MainPage from './MainPage';
import MiniGames from './MiniGames';
import Settings from './Settings';
import Statistics from './Statistics';

import Group from '../components/electronicTextbook/groups/Group';
import GroupsGrid from '../components/electronicTextbook/GroupsGrid';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Main = styled.main`
  background: #f0f3f3;

  .section-title {
    background-image: url('/assets/images/section-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px 0;

    h2 {
      text-align: center;
      font-family: 'Bubblegum Sans', cursive, sans-serif;
      font-size: 36px;
      font-weight: 600;
      color: #fff;
      margin: 0;
    }
  }
`;

const ElectronicTextbook: React.FC = () => {
  const words = useSelector(getWordsData);
  return (
    <div>
      <Main>
        <section className='section-title'>
          <h2>Electronic textbook</h2>
        </section>
        <TopMenu />
        {/* <GroupsGrid /> */}
      </Main>
      <HashRouter>
        {/*<TopMenu/>*/}
        <Switch>
          <Route path='/text-book/group=1'>
            <Group groupNum={1} />
          </Route>
          <Route path='/text-book/group=2'>
            <Group groupNum={2} />
          </Route>
          <Route path='/text-book/group=3'>
            <Group groupNum={3} />
          </Route>
          <Route path='/text-book/group=4'>
            <Group groupNum={4} />
          </Route>
          <Route path='/text-book/group=5'>
            <Group groupNum={5} />
          </Route>
          <Route path='/text-book/group=6'>
            <Group groupNum={6} />
          </Route>
        </Switch>
        {/*<SideMenu />*/}
      </HashRouter>
      {/* )} */}
    </div>
  );
};

export default ElectronicTextbook;
