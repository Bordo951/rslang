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

  if (Number.isNaN(historyPageId)) {
    window.location.href = '#' + match.path + '/page=0';
  }

  let [pageNum, setPageNum] = useState<number>(
    historyPageId > 0 ? historyPageId : 0
  );
  useEffect(() => {
    if (status === 'succeeded' && words !== null) setPageNum(words[0].page);
    setPageNum(0);
    dispatch(fetchWordsData(groupNum - 1, pageNum));
  }, [groupNum]);

  let nextPageNum = pageNum === 29 ? 0 : pageNum + 1;
  let prevPageNum = pageNum === 0 ? 29 : pageNum - 1;
  let currentPageNum = pageNum + 1;

  const handleNextPage = () => {
    setPageNum(nextPageNum);
  };
  const handlePrevPage = () => {
    setPageNum(prevPageNum);
  };

  return (
    <div>
      {status === 'succeeded' && words !== null && (
          <div>
            <p>{`Group:${groupNum}`}</p>
            <p>{`PageNumber:${currentPageNum}`}</p>
            <div>
              <Link
                  onClick={() => handlePrevPage()}
                  to={`${match.url}/page=${prevPageNum}`}
                  style={{ fontSize: '30px' }}
              >
                Previous
              </Link>
            </div>
          </div>
      )}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      <Switch>
        <Route path={`${match.path}/:pageId`}>
          <Page />
        </Route>
      </Switch>
      {status === 'succeeded' && words !== null && (
        <div>
          <div>
            <Link
              onClick={() => handleNextPage()}
              to={`${match.url}/page=${nextPageNum}`}
              style={{ fontSize: '30px', margin: '30px' }}
            >
              Next
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
