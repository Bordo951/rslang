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
import SectionTitle from "../parts/SectionTitle";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ElectronicTextbook: React.FC = () => {
  const words = useSelector(getWordsData);
  return (
    <div>
      <SectionTitle title="Электронный учебник" />
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
    </div>
  );
};

export default ElectronicTextbook;
