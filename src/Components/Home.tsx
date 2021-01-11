import React from 'react';
import styled from 'styled-components';
import undraw_Questions from '../Images/undraw_Questions_re_1fy7 (1).svg';
import { Answer, TOTAL_QUESTION } from '../Shared/Types';

type props = {
    startTrivia: (e: React.MouseEvent<HTMLButtonElement>) => void;
    gameOver: boolean;
    userAnswers: Answer[];
}
const FrontPage = styled.h1`
  font-size: 2rem;
  color: white;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;

    h1{
        width: 80%;
    }
    .left{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .start {
        cursor: pointer;
        border-radius: 1em;
        height: 70px;
        padding: 0 60px;
        border: none;
        background-color: #22357B;
        color: white;
        font-weight: 700;
        font-size: 1.3rem;
      }
`;

function Home({startTrivia, gameOver, userAnswers}: props) {
    return (
        <FrontPage>
            <div className="left">
            <h1>Welcome to this React Trivia Quiz!</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTION ? (
          <button className="start" onClick={startTrivia}>Start quiz</button>
        ) : null}
            </div>
            <img src={undraw_Questions} alt="question mark illustration"></img>
        </FrontPage>
    );
}

export default Home;