import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getWordsData } from '../redux/wordsSlice';

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
  background-color: rgb(210, 210, 210);
  background-image: url('/assets/images/textbook_bg.png');
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: 50% 191px;

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
    
    @media (max-width: 992px) {
      padding: 10px 0;
      
      h2 {
        font-size: 30px;
      }      
    }
    
    @media (max-width: 769px) {
      padding: 10px 0;
      
      h2 {
        font-size: 25px;
        line-height: 1.5;
      }      
    }
    @media (max-width: 769px) {
      padding: 5px 0;     
    }
  }
`;

const ElectronicTextbook: React.FC = () => {
  const words = useSelector(getWordsData);
  return (
    <div>
      <Main>
        <section className='section-title'>
          <h2>Электронный учебник</h2>
        </section>
        <HashRouter>
          <Switch>
            <Route path='/text-book/group=1'>
              <TopMenu />
              <Group groupNum={1} />
            </Route>
            <Route path='/text-book/group=2'>
              <TopMenu />
              <Group groupNum={2} />
            </Route>
            <Route path='/text-book/group=3'>
              <TopMenu />
              <Group groupNum={3} />
            </Route>
            <Route path='/text-book/group=4'>
              <TopMenu />
              <Group groupNum={4} />
            </Route>
            <Route path='/text-book/group=5'>
              <TopMenu />
              <Group groupNum={5} />
            </Route>
            <Route path='/text-book/group=6'>
              <TopMenu />
              <Group groupNum={6} />
            </Route>
            <Route path='/text-book/'>
              <GroupsGrid />
            </Route>
          </Switch>
        </HashRouter>
      </Main>

    </div>
  );
};

export default ElectronicTextbook;
