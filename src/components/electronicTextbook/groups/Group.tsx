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
import styled from "styled-components";
interface Props {
  groupNum: number;
}

const GroupPageContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background: #fff;
`;
const PageLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    margin: 0 30px;
  }
  a {
    text-decoration: none;
    font-family: 'BubblegumSans-Regular', cursive;
    font-size: 25px;
    text-transform: capitalize;
    display: inline-block;
    padding: 5px;
    border: 2px solid;    
    border-radius: 10px;
    
    &[data-group-id='1'] {
      background-color: #FFCCCC;
      border: #ffcccc;
    }
    &[data-group-id='2'] {
      background-color: #FFA953;
    }
    &[data-group-id='3'] {
      background-color: #FEF156;
    }
    &[data-group-id='4'] {
      background-color: #C0DF89;
    }
    &[data-group-id='5'] {
      background-color: #BFE4F9;
    }
    &[data-group-id='6'] {
      background-color: #C8BFE7;
    }
  }
  p {
    margin: 0;
    font-family: 'BubblegumSans-Regular', cursive;
    font-size: 30px;
    text-shadow: 1px 2px 3px #666;
    
    &[data-group-id='1'] {
      color: #F94141;
    }
    &[data-group-id='2'] {
      color: #FF8100;
    }
    &[data-group-id='3'] {
      color: #FFFC00;
    }
    &[data-group-id='4'] {
      color: #4CB717;
    }
    &[data-group-id='5'] {
      color: #008BCC;
    }
    &[data-group-id='6'] {
      color: #A349A4;
    }
  }
`;

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
    <GroupPageContainer>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      <Switch>
        <Route path={`${match.path}/:pageId`}>
          <Page />
        </Route>
      </Switch>
      {status === 'succeeded' && words !== null && (
        <PageLinkWrapper>
          <div>
            <Link
                onClick={() => handlePrevPage()}
                to={`${match.url}/page=${prevPageNum}`}
                data-group-id = {groupNum}
            >
              Предыдущая
            </Link>
          </div>
          {status === 'succeeded' && words !== null && (
          <div>
            <p data-group-id = {groupNum}>{`Страница ${currentPageNum}`}</p>
          </div>
          )}
          <div data-group-id = {groupNum}>
            <Link

              onClick={() => handleNextPage()}
              to={`${match.url}/page=${nextPageNum}`}
              data-group-id = {groupNum}
            >
              Следующая
            </Link>
          </div>
        </PageLinkWrapper>
      )}
    </GroupPageContainer>
  );
};

export default Group;
