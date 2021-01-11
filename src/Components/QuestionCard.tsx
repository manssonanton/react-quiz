import React from 'react';
import {Questions} from '../Shared/Types';
import { Wrapper, ButtonWrapper  } from './QuestionCard.style';

function QuestionCard({ question, answers, callback, userAnswer, questionNr, totalQuestions }: Questions) {
    return (
        <Wrapper>
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p>{question}</p>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper  key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span>{answer}</span>
                        </button>                    
                    </ButtonWrapper >
                ))}
            </div>
        </Wrapper>
    );
}

export default QuestionCard;