import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from "styled-components";

const LoadingComp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(7, 6, 5, 0.322);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  > div {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const Loading: React.FC = () => {
  return <div>
   <LoadingComp>
          <div>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
          <div>Loading...</div>
        </LoadingComp>
  </div>;
};

export default Loading;
