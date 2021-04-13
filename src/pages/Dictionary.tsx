import React, { useState } from 'react';

import {
  LearnedWords,
  DeletedWords,
  HardWords,
} from '../components/dictionary/';
const Dictionary: React.FC = () => {
  const [componentOpened, setComponentOpened] = useState('learned');
  const handleClick = (val: string) => {
    setComponentOpened(val);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick('learned')}>LearnedWords</button>
        <button onClick={() => handleClick('hard')}>HardWords</button>
        <button onClick={() => handleClick('deleted')}>DeletedWords</button>
      </div>
      <div>
        {componentOpened === 'learned' && <LearnedWords />}
        {componentOpened === 'hard' && <HardWords />}
        {componentOpened === 'deleted' && <DeletedWords />}
      </div>
    </div>
  );
};

export default Dictionary;
