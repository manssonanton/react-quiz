import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';
import { fetchQuizQuestions } from './Services/FetchDataService';
import { Difficulty, QuestionState, Answer, TOTAL_QUESTION } from './Shared/Types'
import { GlobalStyle, Wrapper } from './App.style';
import Home from './Components/Home';
import Nav from './Components/Nav';


function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [reStart, setReStart] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setReStart(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY)
    setQuestions(newQuestions);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1)
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      if (number + 1 === TOTAL_QUESTION) {
        setGameOver(true);
      }
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Nav />
      {reStart ? (<Home startTrivia={startTrivia} gameOver={gameOver} userAnswers={userAnswers} />) : null}
      <Wrapper>    
        {gameOver && !reStart && <p className="score">You scored {score} points!</p>}
        {loading && <p className="Loading">Loading questions...</p>}
        {!gameOver && !loading &&
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTION}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer} />}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ?
          <button className="next" onClick={nextQuestion}>Next question</button> : null}
          {(!reStart && gameOver) ? (<button className="next" onClick={startTrivia}>Re start</button>) : null}
      </Wrapper>
    </>
  );
}

export default App;
