import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 280px);
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background: rgb(240, 243, 243);
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 280px);        
  }
  @media (max-width: 992px) {
    width: 90%;     
    grid-template-rows: repeat(3,230px);  
  }
  @media (max-width: 769px) {
    grid-template-rows: repeat(3,170px);
  }
  @media (max-width: 576px) {
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,270px);
  }
  @media (max-width: 420px) {
    width: 85%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,200px);
  }
`;

const GroupContainer = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  transition-duration: 0.3s;
      -webkit-transition-duration: 0.3s;
  
  &[data-name = 'starter'] {
    background-image: url('/assets/images/starter.png');    
    h3 {
        color: #F94141;
    }
  }
  &[data-name = 'elementary'] {
    background-image: url('/assets/images/elementary.png');
    h3 {
        color: #FF8100;
    }
  }
  &[data-name = 'intermediate'] {
    background-image: url('/assets/images/intermediate.png');
    h3 {
        color: #FFFC00;
    }
  }
  &[data-name = 'upper'] {
    background-image: url('/assets/images/upper.png');
    h3 {
        color: #4CB717;
    }
  }
  &[data-name = 'advanced'] {
    background-image: url('/assets/images/advanced.png');
    h3 {
        color: #6E4EFB;
    }
  }
  &[data-name = 'proficiency'] {
    background-image: url('/assets/images/proficiency.png');
    h3 {
        color: #E02DAE;
    }
  }
  &:hover {
    background-color: #fff;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    transform: perspective(1px) translateZ(0);
      -webkit-transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);        
    transition-duration: 0.3s;
      -webkit-transition-duration: 0.3s;        
    transition-property: box-shadow;
      -webkit-transition-property: box-shadow;
    
    &:hover {
        box-shadow: 0 0 8px rgb(0 0 0 / 60%);
        border-radius: 5px; 
    }
    
    h3 {
        padding: 10px 0 0 15px;
        font-family: 'Bubblegum Sans',cursive,sans-serif;
        font-weight: 600;
        line-height: 1.5;
        text-shadow: 1px 2px 3px #666;
    }
  }
  
  @media (max-width: 769px) {
    a {
        h3 {
            padding: 10px 0 0 10px;
            font-size: 1.4rem;
            line-height: 1;
        }  
    }
  }
`;

const GroupsGrid: React.FC = () => {
  return (
    <GridContainer>
      <GroupContainer data-name="starter">
        <NavLink exact to='/text-book/group=1/page=0'>
          <h3>Начинающий</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="elementary">
        <NavLink to='/text-book/group=2/page=0'>
          <h3>Базовый</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="intermediate">
        <NavLink to='/text-book/group=3/page=0'>
          <h3>Средний</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="upper">
        <NavLink to='/text-book/group=4/page=0'>
          <h3>Выше среднего</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="advanced">
        <NavLink to='/text-book/group=5/page=0'>
          <h3>Продвинутый</h3>
        </NavLink>
      </GroupContainer>
      <GroupContainer data-name="proficiency">
        <NavLink to='/text-book/group=6/page=0'>
          <h3>Носитель</h3>
        </NavLink>
      </GroupContainer>
    </GridContainer>
  );
};

export default GroupsGrid;
