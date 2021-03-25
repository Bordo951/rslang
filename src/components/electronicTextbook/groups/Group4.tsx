import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../../../redux/wordsSlice';

const Group4: React.FC = () => {
  const words = useSelector(getWordsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData(3, 0));
  }, [words, dispatch]);

  return <div>Group4</div>;
};

export default Group4;
