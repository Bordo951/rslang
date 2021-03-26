import React from 'react';
import Navbar from './Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAndAutorization from './Logo/Logo';
import styled from 'styled-components';

const Header: React.FC = () => {
  const HeaderWrapper = styled.div`
    background-image: url('./images/header_bg.png');
    background-color: rgb(0, 0, 0);
  `;
  return (
    <HeaderWrapper>
      <LogoAndAutorization />
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
