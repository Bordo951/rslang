import React from 'react';
import styled from 'styled-components';

const TeamInformation = styled.div`
  margin: 20px 0.4rem 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const DeveloperCard = styled.div`
  // border: 4px rgba(82, 209, 247) solid;
  // box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: rgba(82, 209, 247, 0.726);
  // border-radius: 10px;
  margin: 0 0.2rem;
  padding: 0.2rem;
  text-align: center;
  div {
    margin: 0px 0px 15px;
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
    background-color: rgba(246, 249, 250, 0.41);
    border-radius: 10px;
  }
  h5 {
    font-family: 'Lato-Regular', sans-serif;
    font-size: 22px;
    font-style: italic;
    font-weight: normal;
    color: #808080;   
    margin-bottom: 20px;
    
  }
  h3 {
    font-family: 'Bubblegum Sans', cursive, sans-serif;
    font-weight: 600;
    color: #252525;
    margin: 0px 0px 10px;
    line-height: 1.2;
    // font-size: 1.2rem;
    
    @media (max-width: 587px) {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 900px) {
    width: 45%;
    margin-bottom: 20px;
  }
`;

const TeamContainer = styled.div`
  background-color: rgba(240, 243, 243, .7);
  width: 90%;
  margin: 30px auto;
  padding: 1rem;
  // border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  font-family: 'BubblegumSans-Regular', cursive, sans-serif;
  font-weight: 600;
  font-size: 30px;
  padding: 0px 0px 20px;
  text-align: center;
  width: 100%;
  display: inline-block;
  // border-radius: 20px;
  color: #2f2f2f;
  // text-shadow: 2px 1px 3px rgb(5, 5, 5);
  // background-color: rgba(255, 255, 255, 0.74);
  position: relative;
  
  &:after {
    // background-color: #008c99;
    background-image: url('/assets/images/title_bg_white.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    content: "";
    width: 210px;
    height: 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    background-size: 100% 100%;
  }
      
`;
const Team: React.FC = () => {
  return (
    <TeamContainer>
      <Title>О команде</Title>
      <TeamInformation>
        <DeveloperCard>
          <div>
            <img src="./images/farrykh.png" alt="Farrykh" />
          </div>
          <h3>Фаррух Хусанов</h3>
          <h5>FrontEnd-разработка</h5>
        </DeveloperCard>
        <DeveloperCard>
          <div>
            <img src="./images/irina.png" alt="Irina" />
          </div>
          <h3>Ирина Селиванова</h3>
          <h5>FrontEnd-разработка</h5>
        </DeveloperCard>
        <DeveloperCard>
          <div>
            <img src="./images/user.jpg" alt="Vlad" />
          </div>
          <h3>Владислав Горех</h3>
          <h5>Backend-разработка</h5>
        </DeveloperCard>
        <DeveloperCard>
          <div>
            <img src="./images/kiryl.png" alt="Kiryl" />
          </div>
          <h3>Кирилл Плющеня</h3>
          <h5>FrontEnd-разработка</h5>
        </DeveloperCard>
      </TeamInformation>
    </TeamContainer>
  );
};

export default Team;
