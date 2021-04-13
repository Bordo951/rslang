import React from 'react';
import styled from 'styled-components';
import {Button} from "react-bootstrap";

const AboutAppWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
  padding: 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #F0F3F3;
  border-radius: 5px;
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
`;
const Description = styled.p`
  background-color: rgba(255, 255, 255, 0.7);
  width: 70%;
  margin: 10px auto;
  padding: 0.8rem 0.3rem;
  border: 10px #52d0f7 solid;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 721px) {
    font-size: 1rem;
  }
  @media (max-width: 567px) {
    width: 90%;
    font-size: 1rem;
  }
`;
const AtHand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around; 
  margin: 50px 0;
  
  div {
    width: 40%;
  }
`;
const AtHandContent = styled.div`
  text-align: start;
    h4 {
          margin: 10px 0 20px;
          font-family: 'BubblegumSans-Regular', cursive, sans-serif;
          font-weight: 600;
          font-size: 26px;
          color: #2f2f2f;
    }      
    p {
      font-size: 18px;
      color: #7e919f;
    }    
`;
const AdvantagesRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px 0;
`;
const Advantage = styled.div`
  max-width: 30%;
  
  div {
    img {
      width: 75px;
    }
  }
  h4 {
      margin: 10px 0;
      font-family: 'BubblegumSans-Regular', cursive, sans-serif;
      font-weight: 600;
      font-size: 20px;
      color: #2f2f2f;
  }
  p {
    font-size: 16px;
    white-space: pre-wrap;
    color: #7e919f;
  }
`;
const Games = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around; 
  margin: 50px 0;
  text-align: start;
  
  div {
    width: 40%;
  }
  
  h4 {
    margin: 10px 0 20px;
    font-family: 'BubblegumSans-Regular', cursive, sans-serif;
    font-weight: 600;
    font-size: 26px;
    color: #2f2f2f;
  }
  p {
      font-size: 18px;
      color: #7e919f;
  } 
  button {
      font-size: 20px;
      margin: 20px 0;
  }  
  img {
        width: 100%;
  }
`;
const Content = styled.div`
  
`;
const AboutApp: React.FC = () => {
    function openGames() {
        window.location.href = '#/mini-games';
    }
    return (
        <AboutAppWrapper>
            <Title>О приложении</Title>
            {/*<Description>*/}
            {/*    Наша команда с любовью собрала мощнейшее приложение для изучения английского языка, которая будет полезна и*/}
            {/*    тем, кто начинает учить язык с нуля, и обладателям уровня intermideate. Приложение максимально приспособлены*/}
            {/*    для того, чтобы учить английский где угодно и когда угодно. Электронный наставник всегда под рукой, он готов*/}
            {/*    к занятиям в любую вашу свободную минуту. Выполнять задания можно, например, в метро по дороге на работу, в*/}
            {/*    парке на скамейке или ночью, лежа в кровати.*/}
            {/*</Description>*/}
            <AtHand>
                <AtHandContent>
                    <h4>Всегда рядом</h4>
                    <p>Наша команда с любовью создала приложение для изучения английского языка, которое будет всгда под
                        рукой. Приложение подойдет как для тех, кто начинает учить язык с нуля, так и для более
                        опытных опытных пользователей. Приложение максимально приспособлено для того, чтобы учить
                        английский где угодно и когда угодно. Электронный помощник всегда под рукой, он готов к занятиям
                        в любую Вашу свободную минуту. Выполнять задания можно по дороге в метро, на работу, в
                        парке на скамейке или ночью, лежа в кровати.</p>
                </AtHandContent>
                <div>
                    <img src='/assets/images/responsive.png' alt='responsive'/>
                </div>
            </AtHand>
            <AdvantagesRow>
                <Advantage>
                    <div>
                        <img src='/assets/images/free.svg' alt='free'/>
                    </div>
                    <h4>Бесплатный доступ</h4>
                    <p>Мы сделали наше приложениее доступным для всех.</p>
                </Advantage>
                <Advantage>
                    <div>
                        <img src='/assets/images/games.svg' alt='games'/>
                    </div>
                    <h4>Играй и обучайся</h4>
                    <p>Играй и тренируйся, когда тебе удобно.</p>
                </Advantage>
                <Advantage>
                    <div>
                        <img src='/assets/images/words.svg' alt='words'/>
                    </div>
                    <h4>4000 слов</h4>
                    <p>Спциально для тебя, мы подготовили список самых используемых слов.</p>
                </Advantage>
            </AdvantagesRow>
            <Games>
                <Content>
                    <h4>Тренируйся и играй</h4>
                    <p>Тренироваться гораздо интересней, когда играешь. Играй, но при этом ээфективно обучайся языку.</p>
                    <Button variant="info" onClick={() => openGames()}>Играть</Button>
                </Content>
                <div>
                    <img src='/assets/images/game-console.png' alt='game-console'/>
                </div>
            </Games>
        </AboutAppWrapper>
    );
};

export default AboutApp;
