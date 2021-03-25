import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../../../redux/wordsSlice';

const Group5: React.FC = () => {
  const words = useSelector(getWordsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData(4, 0));
  }, [words, dispatch]);

  return <div>Group5</div>;
};

export default Group5;
