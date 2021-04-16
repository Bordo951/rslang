import React, { useState } from 'react';
import styled from 'styled-components';

import {
  LearnedWords,
  DeletedWords,
  HardWords,
} from '../components/dictionary/';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 100%;
    height: 40px;
    border: 2px solid #8f9ffc;
    margin: 0 2px;
    border-radius: 10px;
  }
`;

const Dictionary: React.FC = () => {
  const [componentOpened, setComponentOpened] = useState('learned');
  const handleClick = (val: string) => {
    setComponentOpened(val);
  };

  return (
    <div>
      <ButtonContainer>
        <button onClick={() => handleClick('learned')}>LearnedWords</button>
        <button onClick={() => handleClick('hard')}>HardWords</button>
        <button onClick={() => handleClick('deleted')}>DeletedWords</button>
      </ButtonContainer>
      <div>
        {componentOpened === 'learned' && <LearnedWords />}
        {componentOpened === 'hard' && <HardWords />}
        {componentOpened === 'deleted' && <DeletedWords />}
      </div>
    </div>
  );
};

export default Dictionary;
