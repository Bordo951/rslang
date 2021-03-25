import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsData, fetchWordsData } from '../../../redux/wordsSlice';

const Group3: React.FC = () => {
  const words = useSelector(getWordsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWordsData(2, 0));
  }, [words, dispatch]);

  return <div>Group3</div>;
};

export default Group3;
