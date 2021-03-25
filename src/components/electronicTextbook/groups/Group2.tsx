import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../../../redux/wordsSlice';

const Group2: React.FC = () => {
  const words = useSelector(getWordsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData(1, 0));
  }, [words, dispatch]);

  return <div>Group2</div>;
};

export default Group2;
