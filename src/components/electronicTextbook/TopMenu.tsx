import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Group1, Group2, Group3, Group4, Group5, Group6 } from './groups';

const TopMenu: React.FC = () => {
  return (
    <div>
      <Link to='/group=1'>1</Link>
      <Link to='/group=2'>2</Link>
      <Link to='/group=3'>3</Link>
      <Link to='/group=4'>4</Link>
      <Link to='/group=5'>5</Link>
      <Link to='/group=6'>6</Link>
      <Switch>
        <Route path='/group=1'>
          <Group1 />
        </Route>
        <Route path='/group=2'>
          <Group2 />
        </Route>
        <Route path='/group=3'>
          <Group3 />
        </Route>
        <Route path='/group=4'>
          <Group4 />
        </Route>
        <Route path='/group=5'>
          <Group5 />
        </Route>
        <Route path='/group=6'>
          <Group6 />
        </Route>
      </Switch>
    </div>
  );
};

export default TopMenu;
