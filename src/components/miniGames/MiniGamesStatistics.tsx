import styled from "styled-components";
import {MiniGamesStateType} from "./MiniGamesStateType";
import React from "react";
import {NavLink} from "react-router-dom";
import {VscChromeClose} from "react-icons/all";

interface Props {
    counterLife: number;
    index: number;
    counter: number;
}

const Statistics = styled.div<Partial<MiniGamesStateType>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.308);
  width: 23%;
  ul {
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    width: ${(p) => (p.counterLife || 0) * 2.5}rem;
    list-style-type: none;
    height: 2rem;
    text-align: center;
  }

  li {
    display: inline-block;
    width: 2rem;
    padding: 8px 0.4rem;
    background: url(/images/heart.svg) center center/cover no-repeat;
  }

  a {
    margin: 0.3rem 0.3rem 0 0;
    align-self: flex-end;
  }

  div {
    margin-top: 5px;
    color: rgba(252, 106, 22, 0.803);
    font-size: 1.5rem;
    font-family: "BubblegumSans-Regular";
    text-shadow: 1px 1px 1px rgb(255, 253, 253);
    span {
      text-shadow: 3px 3px 3px rgba(241, 4, 4, 0.774);
      color: whitesmoke;
      font-size: 2rem;
      font-family: "BubblegumSans-Regular";
      margin-right: 0.8rem;
    }
  }
`;

const MiniGameStatistics: React.FC<Props> = ({counterLife, index, counter}) => {
    let lifes = new Array(counterLife).fill(1).map((_, index) => (
        <li key={index}/>
    ));

    return <Statistics counterLife={counterLife}>
        <NavLink to="/mini-games/" data-name="Mini Games">
            <button type="button" className="btn btn-danger">
                <VscChromeClose/>
            </button>
        </NavLink>
        <ul>
            {lifes}
        </ul>
        <div>
            <span>Слов:</span>
            {index + 1} / 20
        </div>
        <div>
            <span>Очки:</span>
            {counter}
        </div>
    </Statistics>;
};

export default MiniGameStatistics;