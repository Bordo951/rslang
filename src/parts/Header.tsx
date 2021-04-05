import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from '../components/forms/SignUp';

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0;
  padding: 6px 0;
  background: url('/assets/images/header_bg.png') repeat #ffffff;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  transition: transform 0.5s ease 0s;
  &:hover {
    transform: scale(1.05);
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;

    img {
      width: 150px;
    }
  }
`;

const Authorization = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgb(10, 209, 189);
  border-radius: 10px;
  font-family: 'Bubblegum Sans', cursive, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: rgb(10, 209, 189);
  width: 170px;
  height: 50px;
  &:hover {
    background: rgb(0, 194, 201);
    color: #fff;
  }
`;

const SignUpForm = styled.div`
  width: 300px;
  height: 400px;
  position: absolute;
  background-color: #bebebe;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header: React.FC = () => {
  const [isSignUpOpen, setSignUpOpen] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <a href='https://rs.school/js/' target='_blank'>
            <img src='/assets/images/logo.png' alt='logo' />
          </a>
        </Logo>
        <Authorization onClick={() => setSignUpOpen(true)}>
          Sign Up
        </Authorization>
        <SignUpForm>
          <SignUp />
        </SignUpForm>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
