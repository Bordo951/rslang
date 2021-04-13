import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SignUp from '../components/forms/SignUp';
import LogIn from '../components/forms/LogIn';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId, logOut } from '../redux/authSlice';

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

  @media (max-width: 992px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
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

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;

      img {
        width: 150px;

        @media (max-width: 576px) {
          width: 100px;
        }
      }
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
  width: 100px;
  height: 50px;
  margin-right: 5px;
  &:hover {
    background: rgb(0, 194, 201);
    color: #fff;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    width: 100px;
    height: 40px;
  }
`;

const SignForm = styled.div`
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
  let dispatch = useDispatch();
  const [isSignUpOpen, setSignUpOpen] = useState<boolean>(false);
  const [isLogInOpen, setLogInOpen] = useState<boolean>(false);
  const userId = useSelector(getUserId);
  const [userSavedId, setUserSavedId] = useState<string | null>(null);
  useEffect(() => {
    setUserSavedId(localStorage.getItem('userId'));
  }, []);
  console.log(userSavedId);
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <a href='https://rs.school/js/' target='_blank'>
            <img src='/assets/images/logo.png' alt='logo' />
          </a>
        </Logo>
        {userSavedId || userId ? (
          <div>
            <Authorization onClick={() => dispatch(logOut())}>
              Log Out
            </Authorization>
          </div>
        ) : (
          <div>
            <Authorization
              onClick={() => {
                setSignUpOpen(true);
                setLogInOpen(false);
              }}
            >
              Sign Up
            </Authorization>
            <Authorization
              onClick={() => {
                setLogInOpen(true);
                setSignUpOpen(false);
              }}
            >
              Log In
            </Authorization>
          </div>
        )}

        {isSignUpOpen && (
          <SignForm>
            <SignUp setSignUpOpen={setSignUpOpen} />
          </SignForm>
        )}
        {isLogInOpen && (
          <SignForm>
            <LogIn setLogInOpen={setLogInOpen} />
          </SignForm>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
