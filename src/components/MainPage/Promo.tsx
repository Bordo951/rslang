import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const Video = styled.video`
  width: 100%;
`;
const PromoText = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  color: rgb(7, 7, 7);
  width: 70%;
  @media (max-width: 1150px) {
    top: 10%;
  }
  @media (max-width: 1100px) {
    width: 30%;
  }
  @media (max-width: 992px) {
    width: 90%;
    top: 10%;
    left: 5%;
  }
  @media (max-width: 768px) {
    width: 90%;
    top: 25%;
    left: 10%;
  }
  @media (max-width: 576px) {
    width: 100%;
    top: 25%;
    left: 10%;
  }
  h3 {
    width: 45%;
    font-family: Arial,sans-serif;
    font-weight: 600;
    font-size: 44px;
    line-height: 1.05;
    letter-spacing: .92px;
    text-shadow: 0 2px 7px rgba(0, 0, 0, .55);
    color: rgb(255, 255, 255);
    @media (max-width: 992px) {
      width: 70%;
      line-height: 1;
    }
    @media (max-width: 768px) {
      width: 70%;
      font-size: 36px;
      text-shadow: 0 2px 7px rgba(0, 0, 0, .55);
    }
    @media (max-width: 576px) {
      width: 60%;
      font-size: 18px;
      text-shadow: 0 2px 7px rgba(0, 0, 0, .55);
    }
  }
  
  p {
    margin: 3rem 0;
    font-family: Arial,sans-serif;
    font-size: 18px;
    width: 50%;
    text-shadow: 0 2px 7px rgba(0, 0, 0, .55);
    color: rgb(255, 255, 255);
    @media (max-width: 992px) {
      margin: 2rem 0;
      width: 70%;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  button {
      font-size: 20px;
      text-shadow: 0 2px 7px rgba(0, 0, 0, .55);
      
    @media (max-width: 768px) {
      margin: 20px 0;
      font-size: 18px;
    }      
    @media (max-width: 576px) {
      margin: 10px 0;
      font-size: 16px;
    }
  }
`;

const Promo: React.FC = () => {
    function openTextbookPage() {
        window.location.href = '#/text-book';
    }
    return (
        <div className="position-relative">
            <Video src="/video/promo-video.mp4" autoPlay muted loop preload="true" typeof="video/mp4"/>
            <PromoText>
                <h3>Изучай аглийский, не выходя из дома</h3>
                <p>RS Lang - это эффективное приложение для увеличения своего словарного запаса на английском языке. Мы
                    подготовили для Вас 4000 наиболее употребимых слов с аудиосопровождением, транскрипцией, переводом и
                    ассоциативными картинками.
                </p>
                <Button variant="info" onClick={() => openTextbookPage()}>Начать обучение</Button>
            </PromoText>
        </div>
    );
};

export default Promo;
