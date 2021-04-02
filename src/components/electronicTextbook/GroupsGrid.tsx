import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 5px;
  width: 80%;
  margin: 10px auto;
`;

const GroupContainer = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  
  &[data-name = 'starter'] {
    background-image: url('/assets/images/starter.png');
  }
  &[data-name = 'elementary'] {
    background-image: url('/assets/images/elementary.png');
  }
  &[data-name = 'intermediate'] {
    background-image: url('/assets/images/intermediate.png');
  }
  &[data-name = 'upper'] {
    background-image: url('/assets/images/upper.png');
  }
  &[data-name = 'advanced'] {
    background-image: url('/assets/images/advanced.png');
  }
  &[data-name = 'proficiency'] {
    background-image: url('/assets/images/proficiency.png');
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
`;

const GroupsGrid: React.FC = () => {
  return (
    <GridContainer>
      <GroupContainer data-name="starter">
        <NavLink exact to='/text-book/group=1/page=0'>
          <h3>Starter</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="elementary">
        <NavLink to='/text-book/group=2/page=0'>
          <h3>Elementary</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="intermediate">
        <NavLink to='/text-book/group=3/page=0'>
          <h3>Intermediate</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="upper">
        <NavLink to='/text-book/group=4/page=0'>
          <h3>Upper-Intermediate</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="advanced">
        <NavLink to='/text-book/group=5/page=0'>
          <h3>Advanced</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="proficiency">
        <NavLink to='/text-book/group=6/page=0'>
          <h3>Proficiency</h3>
        </NavLink>
      </GroupContainer>
    </GridContainer>
  );
};

export default GroupsGrid;
