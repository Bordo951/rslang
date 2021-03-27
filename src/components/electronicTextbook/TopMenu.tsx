import React from 'react';
import {NavLink} from "react-router-dom";

import { Group1, Group2, Group3, Group4, Group5, Group6 } from './groups';
import styled from "styled-components";

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
        transition: .3s ease-in-out;        
    }    
    a[data-name = 'group1'] {
        background-color: #FFCCCC;
        color: #CB4728;        
        border: 2px solid #FFCCCC;
        &:hover,
        &.active {
            background-color: #FF9393;
            border: 2px solid #CB4728;
        }
    }    
    a[data-name = 'group2'] {
        background-color: #BFE4F9;
        color: #008BC1;
        border: 2px solid #BFE4F9;
        &:hover,
        &.active {
            background-color: #79CAF9;
            border: 2px solid #008BC1;
        }
    }
    a[data-name = 'group3'] {
        background-color: #FFA953;
        color: #E35B09;
        border: 2px solid #FFA953;
        &:hover,
        &.active {
            background-color: #FF962C;
            border: 2px solid #E35B09;
        }
    }
    a[data-name = 'group4'] {
        background-color: #C0DF89;
        color: #77B632;
        border: 2px solid #C0DF89;
        &:hover,
        &.active {
            background-color: #B0DF5E;
            border: 2px solid #77B632;
        }
    }
    a[data-name = 'group5'] {
        background-color: #C8BFE7;
        color: #A349A4;
        border: 2px solid #C8BFE7;
        &:hover,
        &.active {
            background-color: #A490E7;
            border: 2px solid #A349A4;
        }
    }
    a[data-name = 'group6'] {
        background-color: #FEF156;
        color: #FE9E1D;
        border: 2px solid #FEF156;
        &:hover,
        &.active {
            background-color: #FEEE3A;
            border: 2px solid #FE9E1D;
        }
    }
`;



const TopMenu: React.FC = () => {
  return (
    <GroupsMenu>
        <NavLink data-name="group1" exact to='/text-book/group=1'>Group 1</NavLink>
        <NavLink data-name="group2" to='/text-book/group=2'>Group 2</NavLink>
        <NavLink data-name="group3" to='/text-book/group=3'>Group 3</NavLink>
        <NavLink data-name="group4" to='/text-book/group=4'>Group 4</NavLink>
        <NavLink data-name="group5" to='/text-book/group=5'>Group 5</NavLink>
        <NavLink data-name="group6" to='/text-book/group=6'>Group 6</NavLink>
    </GroupsMenu>
  );
};

export default TopMenu;
