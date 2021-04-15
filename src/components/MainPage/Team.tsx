import React from 'react';
import styled from 'styled-components';

const TeamInformation = styled.div`
  margin: 20px 0.4rem 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0;
  }
  @media(max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
const DeveloperCard = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.2rem;
  padding: 0.2rem;
  text-align: center;
  @media (max-width: 992px) {
    width: 45%;
    //margin: 20px 0.2rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px 0.2rem;
  }
  @media(max-width: 576px) {
    width: 60%;
    margin: 0;
  }
  
  div {
    margin: 0 0 15px;
    max-width: 200px;
    max-height: 196px;
    clip-path: polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
    
    width: fit-content;
    background: white;
    border: 2px solid white;
  }
  img {
    max-width: 100%;
    width: 99%;
    height: 99%;
    clip-path: polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
  }
  p {
    font-family: 'BubblegumSans-Regular', cursive, sans-serif;
    color: #5c5c5c;
    
    @media (max-width: 576px) {
      display: none;
    }
  }
  h5 {
    font-family: 'Lato-Regular', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: normal;
    color: #808080;   
    margin-bottom: 20px;
    line-height: 1.2;
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
      margin: 0;
    }
  }
  h3 {
    font-family: 'Bubblegum Sans', cursive, sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #252525;
    margin: 0 0 10px;
    line-height: 1.2;
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

const TeamContainer = styled.div`
  background-color: #F0F3F3;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
      
  @media (max-width: 576px) {
    width: 95%;
    padding: 0;
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
const Team: React.FC = () => {
    return (
        <TeamContainer>
            <Title>О команде</Title>
            <TeamInformation>
                <DeveloperCard>
                    <div>
                        <img src="./images/farrykh.png" alt="Farrykh"/>
                    </div>
                    <h3>Фаррух<br/> Хусанов</h3>
                    <h5>FrontEnd-разработка</h5>
                    <p>Проведение митингов. Реализация логики основного приложения. Разработка отображения данных,
                        получаемых с сервера. Работа с Redux. Работа со словарем.
                        Реализация авторизации. </p>
                </DeveloperCard>
                <DeveloperCard>
                    <div>
                        <img src="./images/irina.png" alt="Irina"/>
                    </div>
                    <h3>Ирина<br/> Селиванова</h3>
                    <h5>FrontEnd-разработка</h5>
                    <p>Распределение задач. Проведение митингов. Дизайн приложения. Реализация страницы электронного
                        учебника. Реализация мини-игр Аудиовызов. Разработка навигации приложения.</p>
                </DeveloperCard>
                <DeveloperCard>
                    <div>
                        <img src="./images/vlad.jpg" alt="Vlad"/>
                    </div>
                    <h3>Владислав<br/> Горех</h3>
                    <h5>Backend-разработка</h5>
                    <p>Участие в митингах. Реализация методов API backend. Разработка способов хранения данных
                        пользователя на стороне сервера.</p>
                </DeveloperCard>
                <DeveloperCard>
                    <div>
                        <img src="./images/kiryl.png" alt="Kiryl"/>
                    </div>
                    <h3>Кирилл<br/> Плющеня</h3>
                    <h5>FrontEnd-разработка</h5>
                    <p>Участие в митингах. Реализация promo-страницы. Реализация мини-игр Саванна и Мемори. Помощь в поиске
                        решений поставленных задач.</p>
                </DeveloperCard>
            </TeamInformation>
        </TeamContainer>
    );
};

export default Team;
