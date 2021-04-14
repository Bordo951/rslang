import React, { useEffect, useReducer,useRef } from "react";
import styled from "styled-components";

const GameOver = styled.div<{lengthWords: number}>`
display: flex;
flex-direction: column;
position: absolute;
z-index: 3;
background: url("https://stihi.ru/pics/2019/08/24/4805.jpg")
   center/cover no-repeat  ;
width: 100%;
height: 100vh;
h3 {
  margin: 0 auto;
  font-size: 4rem;
  font-weight: 900;
  font-family: "BubblegumSans-Regular";
  color: rgb(235, 232, 76);
  text-shadow: 3px 2px 3px rgb(5, 5, 5);
}
h4 {
  text-shadow: 3px 2px 3px rgb(140, 120, 225);
  color: white;
  font-size: 3rem;
  font-weight: 800;
  font-family: "BubblegumSans-Regular", cursive;
}
P {
  font-weight: 600;
  background-color: rgba(117, 195, 205, 0.7);
  width: 25%;
  margin-left: 3rem;
  padding: 0.8rem 0.3rem;
  border-radius: 10px;
  font-size: 1.2rem;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(140, 120, 225, 0.4);
}
ol {
  margin: 0 0 5rem 3rem;
  max-width:  ${(p) => {
  return p.lengthWords < 6? `35%` : `55%`
}};
  width: max-content;
  min-width: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem 0.3rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(140, 120, 225, 0.4);
  background-color: rgba(117, 195, 205, 0.5);
  list-style-position: inside;
}

li {
  border-radius: 10px;
  padding: 5px 0.3rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  margin: 0.5rem 1rem;
  color:white;
  background-color: rgba(140, 120, 225, 0.7);
  font-style: oblique;
}
span {
  font-weight: 800;
  background-color: rgba(245, 4, 4, 0.7);
  text-shadow: 3px 2px 3px rgb(182, 184, 185);
  color: rgb(255, 255, 255);
  margin: 5rem auto 3rem;
  padding: 0.5rem 0.3rem;
  border-radius: 10px;
  font-size: 4rem;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(60, 238, 223, 0.2);
}
`;

// const GmeOver: React.FC = () => {
 
//     return(<></>
     
//     )
// }

export default GameOver