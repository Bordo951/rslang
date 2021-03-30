import styled from 'styled-components';

export const PageInner = styled.div``;

export const Card = styled.div`
  width: 400px;
  height: 600px;
  perspective: 1000px;
  margin: 55px auto;
  .fas {
    font-size: 26px;
    position: relative;
  }
`;
export const CardInner = styled.div<{ isCardRotated: boolean }>`
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: transform 1.2s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isCardRotated
      ? 'transform: rotateY(-180deg);'
      : 'transform: rotateY(0deg);'}
`;
export const CardFront = styled.div`
  z-index: -1;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CardBack = styled.div`
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
`;

export const CardContent = styled.div`
  padding: 5px 10px;
`;

export const CardContentBlockWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .fas {
    padding-left: 4px;
  }
`;
export const ImageContainer = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 45%;
  width: 100%;
  position: relative;
  z-index: -1;
  &::after {
    content: '';
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const CardRotateBtn = styled.button`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  .fas {
    font-size: 34px;
    color: #800202;
    transition: all 0.2s ease;
  }
  &:hover .fas {
    transform: scale(1.1);
  }
`;
export const PlaySounBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
  button {
    border: 1px solid #800202;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d1d1d1;
    .fas {
      font-size: 34px;
      color: #800202;
    }
  }
`;
export const CardLearnBtn = styled.button`
  background-color: #e0f8ff;
  width: 100%;
  border: 1px solid #bad9e2;
  border-radius: 4px;
  padding: 4px 0;
  margin-bottom: 4px;
`;
export const CardHardBtn = styled.button`
  background-color: #e0f8ff;
  width: 100%;
  width: 100%;
  border: 1px solid #bad9e2;
  border-radius: 4px;
  padding: 4px 0;
  margin-bottom: 4px;
`;
export const CardDeleteBtn = styled.button`
  background-color: #e0f8ff;
  width: 100%;
  width: 100%;
  border: 1px solid #bad9e2;
  border-radius: 4px;
  padding: 4px 0;
`;
export const CardText = styled.p`
  margin-bottom: 0;
`;
