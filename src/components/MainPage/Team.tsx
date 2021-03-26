import React from 'react';
import styled from 'styled-components';

const TeamIformation = styled.div`
  margin: 20px 0.4rem 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const DeveloperCard = styled.div`
  border: 4px rgba(82, 209, 247) solid;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(82, 209, 247, 0.726);
  border-radius: 10px;
  margin: 0 0.2rem;
  padding: 0.2rem;
  text-align: center;
  img {
    border: 3px #fafafa solid;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  p {
    background-color: rgba(246, 249, 250, 0.41);
    border-radius: 10px;
  }
  h5 {
    color: white;
    text-shadow: 2px 2px 1px #020202;
    height: 60px;
  }
  h3 {
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
  background-color: rgba(82, 209, 247, 0.693);
  width: 90%;
  margin: 30px auto;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  width: max-content;
  font-weight:900;
  padding: 0.4rem;
  margin: 0 auto;
  border-radius: 20px;
  color: rgb(252, 8, 8);
  text-shadow: 2px 1px 3px rgb(5, 5, 5);
  background-color: rgba(255, 255, 255, 0.74);
  font-family: PermanentMarker;
`;
const Team: React.FC = () => {
  return (
    <TeamContainer>
      <Title>Наша команда :</Title>
      <TeamIformation>
        <DeveloperCard>
          <img src="./images/farrykh.png" alt="Farrykh" />
          <h3>Фаррух Хусанов</h3>
          <h5>Разработчик</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus totam, incidunt fugiat nostrum
            quibusdam exercitationem corrupti amet pariatur vero porro, nihil accusamus doloremque impedit veniam
            voluptate error voluptatem sed!
          </p>
        </DeveloperCard>
        <DeveloperCard>
          <img src="./images/irina.png" alt="Irina" />
          <h3>Ирина Селиванова</h3>
          <h5>Координировала команду. Разработчик</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus totam, incidunt fugiat nostrum
            quibusdam exercitationem corrupti amet pariatur vero porro, nihil accusamus doloremque impedit veniam
            voluptate error voluptatem sed!
          </p>
        </DeveloperCard>
        <DeveloperCard>
          <img src="./images/user.jpg" alt="Vlad" />
          <h3>Владислав Горех</h3>
          <h5>Разработчик</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus totam, incidunt fugiat nostrum
            quibusdam exercitationem corrupti amet pariatur vero porro, nihil accusamus doloremque impedit veniam
            voluptate error voluptatem sed!
          </p>
        </DeveloperCard>
        <DeveloperCard>
          <img src="./images/kiryl.png" alt="Kiryl" />
          <h3>Кирилл Плющеня</h3>
          <h5>Разработчик</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus totam, incidunt fugiat nostrum
            quibusdam exercitationem corrupti amet pariatur vero porro, nihil accusamus doloremque impedit veniam
            voluptate error voluptatem sed!
          </p>
        </DeveloperCard>
      </TeamIformation>
    </TeamContainer>
  );
};

export default Team;
