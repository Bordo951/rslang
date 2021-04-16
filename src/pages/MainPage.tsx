import React from 'react';
import styled from 'styled-components';
import Team from '../components/MainPage/Team';
import AboutApp from "../components/MainPage/AboutApp";
import Promo from '../components/MainPage/Promo';

const Main = styled.div`
  //background: url(/images/london.jpg) center center/cover no-repeat fixed;
  background-color: rgb(210, 210, 210);
  background-image: url('/assets/images/product_bg.png');
  background-size: center/cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Screen = styled.img`
  margin: 40px;
  width: 50%;
  @media (max-width: 992px) {
    margin: 30px;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    margin: 20px;
  }
`;
const VideoOnScreen = styled.iframe`
  position: absolute;
  top: 12%;
  width: 47%;
  height: 64%;
  border-radius: 6px;
  @media (max-width: 900px) {
    top: 14%;
    height: 60%;
  }
  @media (max-width: 768px) {
    top: 13%;
    height: 62%;
    width: 66%;
  }
  @media (max-width: 540px) {
    top: 15%;
    height: 59%;
    width: 66%;
  }
`;
const Title = styled.h3`
  font-family: 'BubblegumSans-Regular', cursive, sans-serif;
  font-weight: 600;
  font-size: 30px;
  margin: 20px;
  padding: 0 0 20px;
  text-align: center;
  width: 100%;
  display: inline-block;
  color: #2f2f2f; 
  position: relative;
  
  &:after {
    background-color: #008c99;
    background-image: url('/assets/images/title_bg_white.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    content: "";
    width: 210px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-size: 100% 100%;
  } 
  @media (max-width: 768px) {
    font-size: 26px;
    margin: 10px 0;
    padding: 0 0 10px;
    
    &:after {
      width: 122px;
      height: 15px;
    }   
  }  
  @media (max-width: 576px) {
    font-size: 24px;
    margin: 5px 0;
    padding: 0 0 6px;
    
    &:after {
      width: 111px;
      height: 11px;
    }   
  }
`;
const Container = styled.div`
  width: 80%;
  margin: 30px auto;
  padding: 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #F0F3F3;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    img {
      margin: 30px auto;
    }
  }
  @media (max-width: 576px) {
    width: 95%;
    margin: 20px auto;
    padding: 0;
  }
`;

const MainPage: React.FC = () => {
  return (
      <Main>
        <Promo />
        <AboutApp/>
          <Team />
          <Container>
              <Title>Промо</Title>
              <div className="d-flex justify-content-center position-relative">
                  <Screen src="./images/monitor.png" alt="screen" />
                  <VideoOnScreen src="https://www.youtube.com/embed/WYetg3AuLE4" />
              </div>
          </Container>
      </Main>
  );
};

export default MainPage;
