import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../../../redux/wordsSlice';

const Group1: React.FC = () => {
  const words = useSelector(getWordsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData(0, 0));
  }, [words, dispatch]);

  return <div>Group1</div>;
};

export default Group1;
