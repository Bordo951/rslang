import React from 'react';
import {NavLink} from "react-router-dom";

import { Group1, Group2, Group3, Group4, Group5, Group6 } from './groups';
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 5px;
  width: 80%;
  margin: 10px auto;    
`;

const GroupContainer = styled.div`
    background-image: url('https://place-hold.it/300x200');
    
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
            <GroupContainer>
                <NavLink exact to='/text-book/group=1'>
                    <h3>Group1</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer>
                <NavLink to='/text-book/group=2'>
                    <h3>Group2</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer>
                <NavLink to='/text-book/group=3'>
                    <h3>Group3</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer>
                <NavLink to='/text-book/group=4'>
                    <h3>Group4</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer>
                <NavLink to='/text-book/group=5'>
                    <h3>Group5</h3>
                </NavLink>
            </GroupContainer>
            <GroupContainer>
                <NavLink to='/text-book/group=6'>
                    <h3>Group6</h3>
                </NavLink>
            </GroupContainer>
        </GridContainer>
    );
};

export default GroupsGrid;
