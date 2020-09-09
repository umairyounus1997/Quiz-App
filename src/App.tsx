import React, {useState} from 'react';
import { QuestionCard } from './components/QuestionCard';
import {fetchQuestions, Difficulty, QuestionState, Question } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  

  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await ()
  };

  const nextQuestion = async() => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

return (
    <div className="App">
      <h1>Quiz</h1>
      <button className='start' onClick={startQuiz}> 
        Begin Quiz 
      </button>
      <p className='score'> Score: </p>
      <p className='loading'> Loading... </p>
      {/* <QuestionCard 
        questionNum = {number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined }
        callback = {checkAnswer}
        /> */}
      <button className='next' onClick={nextQuestion}> Next </button>
    </div>
  );
}

export default App;
