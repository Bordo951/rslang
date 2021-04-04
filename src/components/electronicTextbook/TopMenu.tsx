import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import styled from 'styled-components';

const WrapperTopMenu = styled.section`
  width: 100%;
  background-color: #F4F4F4;
`;
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
  background-color: #ffa953;
    color: #e35b09;
    border: 2px solid #ffa953;
    &:hover,
    &.active {
      background-color: #ff962c;
      border: 2px solid #e35b09;
    }
  }
  a[data-name='group3'] {
    background-color: #fef156;
    color: #fe9e1d;
    border: 2px solid #fef156;
    &:hover,
    &.active {
      background-color: #feee3a;
      border: 2px solid #fe9e1d;
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
  background-color: #bfe4f9;
    color: #008bc1;
    border: 2px solid #bfe4f9;
    &:hover,
    &.active {
      background-color: #79caf9;
      border: 2px solid #008bc1;
    }
  }
  a[data-name='group6'] {
    background-color: #c8bfe7;
    color: #a349a4;
    border: 2px solid #c8bfe7;
    &:hover,
    &.active {
      background-color: #a490e7;
      border: 2px solid #a349a4;
    }
  }
`;

const TopMenu: React.FC = () => {
  let isActiveGroup = (groupId:any):boolean => {
        return window.location.href.includes("group=" + groupId);
  };

  return (
    <WrapperTopMenu>
        <GroupsMenu>
            <NavLink className={isActiveGroup(1) ? 'active' : ''} data-name='group1' to='/text-book/group=1/page=0'>
                Начинающий
            </NavLink>
            <NavLink className={isActiveGroup(2) ? 'active' : ''} data-name='group2' to='/text-book/group=2/page=0'>
                Базовый
            </NavLink>
            <NavLink className={isActiveGroup(3) ? 'active' : ''} data-name='group3' to='/text-book/group=3/page=0'>
                Средний
            </NavLink>
            <NavLink className={isActiveGroup(4) ? 'active' : ''} data-name='group4' to='/text-book/group=4/page=0'>
                Выше среднего
            </NavLink>
            <NavLink className={isActiveGroup(5) ? 'active' : ''} data-name='group5' to='/text-book/group=5/page=0'>
                Продвинутый
            </NavLink>
            <NavLink className={isActiveGroup(6) ? 'active' : ''} data-name='group6' to='/text-book/group=6/page=0'>
                Носитель
            </NavLink>
        </GroupsMenu>
    </WrapperTopMenu>
  );
};

export default TopMenu;
