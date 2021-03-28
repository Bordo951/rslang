import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from '../../../redux/wordsSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import Page from './Page';
interface Props {
  groupNum: number;
}

const Group: React.FC<Props> = ({ groupNum }) => {
  const words = useSelector(getWordsData);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  let match = useRouteMatch();
  let historyPageId = +useHistory().location.pathname.slice(-1);
  let [pageNum, setPageNum] = useState<number>(
    historyPageId > 0 ? historyPageId : 0
  );
  useEffect(() => {
    if (status === 'succeeded' && words !== null) setPageNum(words[0].page);
    setPageNum(0);
    dispatch(fetchWordsData(groupNum - 1, pageNum));
  }, [groupNum]);
  const handleNextPage = () => {
    pageNum !== 30 ? setPageNum(pageNum + 1) : setPageNum(pageNum);
  };
  const handlePrevPage = () => {
    pageNum !== 1 ? setPageNum(pageNum - 1) : setPageNum(pageNum);
  };
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:pageId`}>
          <Page />
        </Route>
      </Switch>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && words !== null && (
        <div>
          {`Group-${groupNum}`}
          <div>
            <Link
              onClick={() => handleNextPage()}
              to={`${match.url}/page=${pageNum + 1}`}
              style={{ fontSize: '30px', margin: '30px' }}
            >
              +
            </Link>
            <Link
              onClick={() => handlePrevPage()}
              to={`${match.url}/page=${pageNum - 1}`}
              style={{ fontSize: '30px' }}
            >
              -
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
