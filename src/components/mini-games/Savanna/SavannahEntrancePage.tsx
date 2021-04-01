import React from 'react';
import styled from 'styled-components';
import { VscSettingsGear, VscChromeClose } from 'react-icons/vsc';
import { BsQuestionCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const HeaderBytton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    font-family: 'BubblegumSans-Regular';
    color: rgb(0, 206, 209);
    text-shadow: 3px 2px 3px rgb(2, 2, 2);
  }

  p {
    font-style: oblique;
    text-shadow: 2px 1px 2px rgba(10, 10, 10, 0.705);
    font-size: 1.5rem;
    color: rgba(247, 252, 252, 0.973);
    font-weight: 600;
  }
`;

const Page = styled.div`
  background: url(/images/Savannah.jpg) center center/cover no-repeat fixed;
  height: 100vh;
`;
const EntrancePage: React.FC = () => {
  return (
    <Page>
      <HeaderBytton>
        <button type="button" className="btn-sm btn btn-light">
          <BsQuestionCircle />
        </button>
        <button type="button" className="btn btn-dark">
          <div className="d-flex align-items-center">
            <VscSettingsGear />
            Settings
          </div>
        </button>
        <button type="button" className="btn btn-danger">
          <VscChromeClose />
        </button>
      </HeaderBytton>
      <Description>
        <h3>Саванна</h3>
        <p>Эта игра покажет твой словарный запас и поможет его увеличить</p>
              <NavLink to="/savannah" data-name="Savannah mini-game">
        <button className="btn btn-info btn-lg">Начать игру</button>
              </NavLink>
      </Description>
    </Page>
  );
};
export default EntrancePage;
