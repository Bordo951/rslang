import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Group1, Group2, Group3, Group4, Group5, Group6 } from './groups';
import styled from "styled-components";

const GroupsMenu = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .groupsMenuItem {
        width: 20%;
        padding: 20px 0;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        transition: .3s ease-in-out;        
    }    
    .group-1 {
        background-color: #FFCCCC;
        color: #CB4728;
        &:hover {
            background-color: #FF9393;
            color: #FFF;
        }
    }    
    .group-2 {
        background-color: #BFE4F9;
        color: #008BC1;
        &:hover {
            background-color: #79CAF9;
            color: #FFF;
        }
    }
    .group-3 {
        background-color: #FFA953;
        color: #E35B09;
        &:hover {
            background-color: #FF962C;
            color: #FFF;
        }
    }
    .group-4 {
        background-color: #C0DF89;
        color: #77B632;
        &:hover {
            background-color: #B0DF5E;
            color: #FFF;
        }
    }
    .group-5 {
        background-color: #C8BFE7;
        color: #A349A4;
        &:hover {
            background-color: #A490E7;
            color: #FFF;
        }
    }.group-6 {
        background-color: #FEF156;
        color: #FE9E1D;
        &:hover {
            background-color: #FEEE3A;
            color: #FFF;
        }
    }
`;



const TopMenu: React.FC = () => {
  return (
    <GroupsMenu>
        <Link className="groupsMenuItem group-1" to='/text-book/group=1'>Group 1</Link>
        <Link className="groupsMenuItem group-2" to='/text-book/group=2'>Group 2</Link>
        <Link className="groupsMenuItem group-3" to='/text-book/group=3'>Group 3</Link>
        <Link className="groupsMenuItem group-4" to='/text-book/group=4'>Group 4</Link>
        <Link className="groupsMenuItem group-5" to='/text-book/group=5'>Group 5</Link>
        <Link className="groupsMenuItem group-6" to='/text-book/group=6'>Group 6</Link>
    </GroupsMenu>
  );
};

export default TopMenu;
