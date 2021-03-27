import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Video = styled.video`
  width: 100%;
`;
const PromoText = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  color: rgb(7, 7, 7);
  text-align: center;
  width: 20%;
  @media (max-width: 1150px) {
    top: 10%;
  }
  @media (max-width: 1100px) {
    width: 30%;
  }
  @media (max-width: 910px) {
    width: 55%;
  }
  @media (max-width: 687px) {
    width: 65%;
    top: 5;
  }
  @media (max-width: 567px) {
    width: 85%;
    top: 0;
  }
  p {
    margin: 3rem 0;
    font-size:1.2rem;
    border-radius: 20px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.479);
    border: 5px #52d0f7 solid;
    padding: 0.5rem 0.3rem;
    @media (max-width: 687px) {
      margin: 1rem 0;
    font-size: 1rem;
    }
    @media (max-width: 567px) {
      margin: 0.3rem 0;
    }
  }
  h3 {
    text-shadow: 2px 2px 1px #020202;
    color: rgb(255, 255, 255);
  }
`;

const Promo: React.FC = () => {
  return (
    <div className="position-relative">
      <Video src="/video/promo-video.mp4" autoPlay muted loop preload="true" typeof="video/mp4" />
      <PromoText>
        <h3>Изучи аглийский не выходя из дома</h3>
        <p>
          Благодоря этому приложению вы сможете увеличить свой словарный запас на 4000 слов, улучшить способности в
          воспиятии ангийского на слух и многое другое
        </p>
        <Button variant="info">Электронный учебник</Button>
      </PromoText>
    </div>
  );
};

export default Promo;
