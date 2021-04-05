import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainMenu = styled.nav``;
const MenuList = styled.ul`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MenuItem = styled.li`
  list-style-type: none;
  display: inline;
  width: 20%;
  margin-right: 1px;
  font-family: 'Bubblegum Sans', cursive, sans-serif;
  font-size: 24px;
  font-weight: 600;

  a {
    cursor: pointer;
    position: relative;
    border-top: 5px solid;
    display: inline-block;
    width: 100%;
    height: 70px;
    margin: 0 auto;    
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const MenuItem = styled.li`
    list-style-type: none;
    display: inline;
    width: 20%;
    margin-right: 1px;
    font-family: 'Bubblegum Sans',cursive,sans-serif;
    font-size: 24px;
    font-weight: 600;
    
    a {
        cursor: pointer;
        position: relative;
        border-top: 5px solid;
        display: inline-block;
        width: 100%;
        height: 70px;
        overflow: hidden;
        line-height: 65px;
        text-decoration: none;
        text-align: center;
        background-color: transparent;
        margin-top: -1px;
        font-weight: bold;
    
        &:before {
            content: attr(data-name);
        }
        
        &[data-name = 'Главная'] {
            border-color: #F27C7E;
            &:before {
                color: #F27C7E;
            }            
            span {
                background: #F27C7E;
            }
        }
        
        &[data-name = 'Учебник'] {
            border-color: #B0B6FB;
            &:before {
                color: #B0B6FB;
            }            
            span {
                background: #B0B6FB;
            }
        }
        
        &[data-name = 'Игры'] {
            border-color: #EA9D5F;            
            &:before {
                color: #EA9D5F;
            }            
            span {
                background: #EA9D5F;
            }
        } 
        
        &[data-name = 'Настройки'] {
            border-color: #DE81B8;
            &:before {
                color: #DE81B8;
            }            
            span {
                background: #DE81B8;
            }
        }    
        
        &[data-name = 'Статистика'] {
            border-color: #ACC158;
            &:before {
                color: #ACC158;
            }
            span {
                background: #ACC158;
            }
        }          
        
        span {
            width: inherit;
            line-height: 65px;
            bottom: auto;
            top: -70px;
            left: 0px;
            transition: top .3s ease-in-out;
            display: block;
            position: absolute;
            
            &:before {
                content: attr(data-name);
                color: white;
            }
        }
        
        &:hover,
        &.active {
            color: #FFFFFF;
            
            span {
                top: 0px;
            }
        }        
    }
  }
`;

const Menu: React.FC = () => {
    return (
        <MainMenu>
            <MenuList>
                <MenuItem>
                    <NavLink exact to="/" data-name="Главная">
                        <span data-name="Главная"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/text-book" data-name="Учебник">
                        <span data-name="Учебник"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/mini-games" data-name="Игры">
                        <span data-name="Игры"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/settings" data-name="Настройки">
                        <span data-name="Настройки"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/statistics" data-name="Статистика">
                        <span data-name="Статистика"></span>
                    </NavLink>
                </MenuItem>
            </MenuList>
        </MainMenu>
    );
};

export default Menu;
