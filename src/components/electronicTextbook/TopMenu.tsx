import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import styled from 'styled-components';

const GroupsMenu = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 20%;
    padding: 20px 0;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    transition: 0.3s ease-in-out;
  }
  a[data-name='group1'] {
    background-color: #ffcccc;
    color: #cb4728;
    border: 2px solid #ffcccc;
    &:hover,
    &.active {
      background-color: #ff9393;
      border: 2px solid #cb4728;
    }
  }
  a[data-name='group2'] {
    background-color: #bfe4f9;
    color: #008bc1;
    border: 2px solid #bfe4f9;
    &:hover,
    &.active {
      background-color: #79caf9;
      border: 2px solid #008bc1;
    }
  }
  a[data-name='group3'] {
    background-color: #ffa953;
    color: #e35b09;
    border: 2px solid #ffa953;
    &:hover,
    &.active {
      background-color: #ff962c;
      border: 2px solid #e35b09;
    }
  }
  a[data-name='group4'] {
    background-color: #c0df89;
    color: #77b632;
    border: 2px solid #c0df89;
    &:hover,
    &.active {
      background-color: #b0df5e;
      border: 2px solid #77b632;
    }
  }
  a[data-name='group5'] {
    background-color: #c8bfe7;
    color: #a349a4;
    border: 2px solid #c8bfe7;
    &:hover,
    &.active {
      background-color: #a490e7;
      border: 2px solid #a349a4;
    }
  }
  a[data-name='group6'] {
    background-color: #fef156;
    color: #fe9e1d;
    border: 2px solid #fef156;
    &:hover,
    &.active {
      background-color: #feee3a;
      border: 2px solid #fe9e1d;
    }
  }
`;

const TopMenu: React.FC = () => {
  return (
    <GroupsMenu>
      <NavLink data-name='group1' to='/text-book/group=1/'>
        Group 1
      </NavLink>
      <NavLink data-name='group2' to='/text-book/group=2/'>
        Group 2
      </NavLink>
      <NavLink data-name='group3' to='/text-book/group=3/'>
        Group 3
      </NavLink>
      <NavLink data-name='group4' to='/text-book/group=4/'>
        Group 4
      </NavLink>
      <NavLink data-name='group5' to='/text-book/group=5/'>
        Group 5
      </NavLink>
      <NavLink data-name='group6' to='/text-book/group=6/'>
        Group 6
      </NavLink>
    </GroupsMenu>
  );
};

export default TopMenu;
