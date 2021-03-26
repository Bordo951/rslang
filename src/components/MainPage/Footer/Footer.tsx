import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Footer: React.FC = () => {
  const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 70px;
    border-top: 2px black solid;
    background-color: rgba(36, 35, 35, 0.8);
    padding: 5px 0;
    span {
      color: white;
      font-size: 2rem;
    }
  `;
  const LogoFooter = styled.div`
    width: 6rem;
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
  const LinktoGit = styled.a`
    &:hover {
      text-decoration: none;
    }
  `;
  return (
    <Footer>
      <span>2021</span>
      <div className="d-flex align-items-center">
        <img src="./images/git.png" alt="git" className="" />
        <DropdownButton drop="up" title="Our team" variant="info">
          <Dropdown.Item href="https://github.com/khusanov-95" target="blank">
            Фаррух Хусанов
          </Dropdown.Item>
          <Dropdown.Item href="https://github.com/Bordo951" target="blank">
            Ирина Селиванова
          </Dropdown.Item>
          <Dropdown.Item href="https://github.com/vhoreho" target="blank">
            Владислав Горех
          </Dropdown.Item>
          <Dropdown.Item href="https://github.com/Kiryuha94" target="blank">
              Кирилл Плющеня
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <LogoFooter>
        <a href="https://rs.school/js/">
          <img src="./images/logo-footer.png" alt="logo" />
        </a>
      </LogoFooter>
    </Footer>
  );
};

export default Footer;
