import styled from 'styled-components';

export const PageInner = styled.div``;

export const Card = styled.div`
  width: 600px;
  height: 600px;
  perspective: 1000px;
  margin: 10px auto 55px;
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
  margin: 0 auto;
  padding: 5px 10px;
  
  div {
    margin-bottom: 0;
    font-family: 'Lato-Regular',sans-serif;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: normal;
    color: #808080;
    text-align: center;
  }
`;

export const CardContentBlockWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .fas {
    padding-left: 4px;
  }
  span, div {
    margin: 10px;
    font-family: 'BubblegumSans-Regular',cursive;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
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
    font-size: 35px;
    transition: all 0.2s ease;
  }
  i[data-group-id='1']{
    color: #F94141;
  }
  i[data-group-id='2']{
    color: #FF8100;
  }
  i[data-group-id='3']{
    color: #FFFC00;
  }
  i[data-group-id='4']{
    color: #4CB717;
  }
  i[data-group-id='5']{
    color: #008BCC;
  }
  i[data-group-id='6']{
    color: #A349A4;
  }
  
  &:hover .fas {
    transform: scale(1.1);
  }
`;
export const PlaySounBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  
  button {
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;    
    transform: perspective(1px) translateZ(0);
      -webkit-transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);        
    transition-duration: 0.3s;
      -webkit-transition-duration: 0.3s;        
    transition-property: box-shadow;
      -webkit-transition-property: box-shadow;
    
    &:hover {
      box-shadow: 0 0 8px rgb(0 0 0 / 60%);
    }
    
    .fas {
      font-size: 35px;
    }
    
    &[data-group-id='1'] {
      border: 2px solid #F94141;      
      i {
        color: #F94141;
      }
    }
    &[data-group-id='2'] {
      border: 2px solid #FF8100;      
      i {
        color: #FF8100;
      }
    }
    &[data-group-id='3'] {
      border: 2px solid #FFFC00;      
      i {
        color: #FFFC00;
      }
    }   
    &[data-group-id='4'] {
      border: 2px solid #4CB717;      
      i {
        color: #4CB717;
      }
    }    
    &[data-group-id='5'] {
      border: 2px solid #008BCC;      
      i {
        color: #008BCC;
      }
    } 
    &[data-group-id='6'] {
      border: 2px solid #A349A4;      
      i {
        color: #A349A4;
      }
    }    
  }
`;
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CardsBtnsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    
    button {
      padding: 5px 10px;      
      border-radius: 10px;
      font-family: 'BubblegumSans-Regular',cursive;
      font-weight: 600;
      transform: perspective(1px) translateZ(0);
        -webkit-transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);        
      transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;        
      transition-property: box-shadow;
        -webkit-transition-property: box-shadow;
        
      &:hover {
        box-shadow: 0 0 8px rgb(0 0 0 / 60%);
      }     
    }
    button[data-group-id='1'] {
      background-color: #ffcccc;
      border: 2px solid #cb4728;
      color: #cb4728;
    }
    button[data-group-id='2'] {
      background-color: #ffa953;
      border: 2px solid #e35b09;
      color: #e35b09;
    }
    button[data-group-id='3'] {
      background-color: #fef156;
      border: 2px solid #fe9e1d;
      color: #fe9e1d;
    }
    button[data-group-id='4'] {
      background-color: #c0df89;
      border: 2px solid #77b632;
      color: #77b632;
    }
    button[data-group-id='5'] {
      background-color: #bfe4f9;
      border: 2px solid #008bc1;
      color: #008bc1;
    }
    button[data-group-id='6'] {
      background-color: #c8bfe7;
      border: 2px solid #a349a4;
      color: #a349a4;
    }
`;
export const CardLearnBtn = styled.button`
`;
export const CardHardBtn = styled.button`
`;
export const CardDeleteBtn = styled.button`
`;
export const CardText = styled.p`
  margin-bottom: 0;
  font-family: 'Lato-Regular',sans-serif;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: normal;
  color: #808080;
  text-align: center;
`;
