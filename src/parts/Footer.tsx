import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    margin: 0;
    border-top: 2px solid #D6D6D6;
    background: url('/assets/images/header_bg.png') repeat #FFFFFF;
`;

const Container = styled.div`
    width: 80%;
    margin: 5px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
     @media (max-width: 769px) {
        width: 95%;       
    }
    
    @media (max-width: 576px) {
        width: 100%;
        flex-direction: column-reverse;
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
    }
    
    @media (max-width: 576px) {
       margin: 5px 0;
    }
`;
const Authors = styled.div`
    width: 100%;
    ul {
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    li {
        font-family: 'BubblegumSans-Regular', cursive;
        font-size: 22px;
        text-transform: capitalize;
        
        @media (max-width: 576px) {
            font-size: 18px;
        }
    }
    img {
         width: 25px   
    }
    a {
        text-decoration: none;
        display: flex;
        align-items: start;
        color: #5c5c5c;
        transition: all 0.3s ease-in-out 0s;
        &:hover {
            color: #9D479E;
        }
    }    
`;
const Copyright = styled.p`    
    padding: 8px 0 5px;
    background: url('/assets/images/footer_hr.jpg') center top repeat-x;
    text-align: center;
    background-color: #008c99;
    margin: 0px;
    line-height: 35px;
    color: #FFFFFF;
    
    @media (max-width: 992px) {
        line-height: 24px;        
    }
    
    @media (max-width: 576px) {
        padding: 8px 5px 5px;
        font-size: 14px;
        line-height: 20px;        
    }
`


const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Container>
                <Logo>
                    <a href='https://rs.school/js/' target='_blank'>
                        <img src='/assets/images/logo.png' alt='logo'/>
                    </a>
                </Logo>
                <Authors>
                    <ul>
                        <li>
                            <a href='https://github.com/vhoreho' target='_blank'>
                                <img src='/assets/images/apprentice_boy.svg' alt='apprentice_boy'/>
                                Vladislav Horeh
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/khusanov-95' target='_blank'>
                                <img src='/assets/images/apprentice_boy.svg' alt='apprentice_boy'/>
                                Farrukh Khusanov
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Bordo951' target='_blank'>
                                <img src='/assets/images/apprentice_girl.svg' alt='apprentice_girl'/>
                                Irina Selivanova
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/kiryuha94' target='_blank'>
                                <img src='/assets/images/apprentice_boy.svg' alt='apprentice_boy'/>
                                Kiryl Pliushchenia
                            </a>
                        </li>
                    </ul>
                </Authors>
            </Container>
            <Copyright>&copy; 2021Q1 The Rolling Scopes School, All Rights Reserved</Copyright>
        </FooterContainer>
    );
};

export default Footer;
