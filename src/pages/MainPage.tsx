import React from 'react';
import Header from '../components/MainPage/Header/Header';
import styled from 'styled-components';
import Footer from '../components/MainPage/Footer/Footer';
import Team from '../components/MainPage/Team';
import Promo from '../components/MainPage/Promo';

const Main = styled.div`
  background: url(/images/london.jpg) center center/cover no-repeat fixed;
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
const Screen = styled.img`
  margin: 40px;
  width: 50%;
  width: 50%;
  @media (max-width: 768px) {
    width: 70%;
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
  width: max-content;
  font-weight: 900;
  padding: 0.4rem;
  margin: 0 auto;
  border-radius: 20px;
  color: rgb(252, 8, 8);
  text-shadow: 2px 1px 3px rgb(5, 5, 5);
  background-color: rgba(255, 255, 255, 0.74);
  font-family: PermanentMarker;
`;
const Container = styled.div`
  background-color: rgba(82, 209, 247, 0.693);
  width: 90%;
  margin: 30px auto;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Main>
        <Header />
        <Promo />
        <Container>
          <Title>Почему наше приложение?</Title>
          <Description>
            Наша команда с любовью собрала мощнейшее приложение для изучения английского языка, которая будет полезна и
            тем, кто начинает учить язык с нуля, и обладателям уровня intermideate. Приложение максимально приспособлены
            для того, чтобы учить английский где угодно и когда угодно. Электронный наставник всегда под рукой, он готов
            к занятиям в любую вашу свободную минуту. Выполнять задания можно, например, в метро по дороге на работу, в
            парке на скамейке или ночью, лежа в кровати.
          </Description>
        </Container>
        <Container>
        <Title>
          Видео пакажет функционал <br /> нашего приложения
        </Title>
        <div className="d-flex justify-content-center position-relative">
          <Screen src="./images/monitor.png" alt="screen" />
          <VideoOnScreen src="https://www.youtube.com/embed/WYetg3AuLE4" />
        </div>
        </Container>
        <Team />
        <Footer />
      </Main>
    </>
  );
};

export default MainPage;
