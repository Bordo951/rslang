import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineStock, AiOutlineSetting } from 'react-icons/ai';

const Logo = styled.div`
  margin-left: 3rem;
  width: 100px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  a {
    display: inline-block;
  }
  img {
    width: 100%;
  }
`;
const LogoUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: rgb(69, 73, 73);
  border-radius: 20px;
  padding: 0.2rem;

  img {
    margin-right: 0.2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(128, 128, 128);
    cursor: pointer;
  }
`;

const LogoAndUser: React.FC = () => {
  return (
    <LogoUser>
      <Logo>
        <img src="./images/logo.png" alt="logo" />
      </Logo>
      <User>
        <img src="./images/user.jpg" alt="user" />
        <DropdownButton title="Username" variant="dark">
          <Dropdown.Item href="#/action-1">
            <AiOutlineStock />
            Статистика
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <AiOutlineSetting />
            Настройки
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <AiOutlineUser />
            Выйти
          </Dropdown.Item>
        </DropdownButton>
      </User>
    </LogoUser>
  );
};

export default LogoAndUser;
