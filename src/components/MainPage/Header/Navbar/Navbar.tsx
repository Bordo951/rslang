import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const NavLink = styled(Nav.Link)`
  margin-right: 1rem;
  &:hover {
    text-shadow: 3px 5px 7px #5eb4ce;
    transform: scale(1.1);
  }
`;

const NavbarHadar: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="justify-content-center w-100">
            <NavLink href="#ebook">Электронный учебник</NavLink>
            <NavLink href="#statistics">Статистика</NavLink>
            <NavDropdown title="Мини-игры" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Саванна</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Аудиовызов</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Спринт</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Своя игра</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarHadar;
