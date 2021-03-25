import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const MainMenu = styled.nav``;
const MenuList = styled.ul`
    width: 80%;
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
        margin-top: -5px;
        font-weight: bold;
    
        &:before {
            content: attr(data-name);
        }
        
        &.home {
            border-color: #F27C7E;
            &:before {
                color: #F27C7E;
            }            
            span {
                background: #F27C7E;
            }
        }
        
        &.textbook {
            border-color: #B0B6FB;
            &:before {
                color: #B0B6FB;
            }            
            span {
                background: #B0B6FB;
            }
        }
        
        &.games {
            border-color: #EA9D5F;            
            &:before {
                color: #EA9D5F;
            }            
            span {
                background: #EA9D5F;
            }
        } 
        
        &.settings {
            border-color: #DE81B8;
            &:before {
                color: #DE81B8;
            }            
            span {
                background: #DE81B8;
            }
        }    
        
        &.statistic {
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
        
        &:hover {
            color: #FFFFFF;
            
            span {
                top: 0px;
            }
        }
        
    }
`;

const Menu: React.FC = () => {
    return (
        <MainMenu>
            <MenuList>
                <MenuItem>
                    <NavLink exact to="/" className="home" data-name="Home">
                        <span data-name="Home"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/text-book" className='textbook' data-name="Textbook">
                        <span data-name="Textbook"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/mini-games" className='games' data-name="Mini-Games">
                        <span data-name="Mini-Games"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/settings" className='settings' data-name="Settings">
                        <span data-name="Settings"></span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/statistics" className='statistic' data-name="Statistic">
                        <span data-name="Statistic"></span>
                    </NavLink>
                </MenuItem>
            </MenuList>
        </MainMenu>
    );
};

export default Menu;
