import React, { useState } from "react";
import Questions from "../Questions";
import { useNavigate } from "react-router-dom";
// currentQuestion=key

function MainPage() {
  const [result, setResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [counter,setCounter]=useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  function optionClicked(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (counter + 1 < Questions.length) {

      const remainingQuestions = [...Questions].filter(
        (question, index) => index !== currentQuestion
      );
      if (remainingQuestions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * remainingQuestions.length
        );
        setCurrentQuestion(randomIndex);
        setCounter(counter+1);
      } else {
        setResult(true);
      }
    } else {
      setResult(true);
    }
  }

  function goToFinalResult() {
    navigate("/result", { state: { score: score } });
  }
  return (
    <div className="main-page">
      {result ? (
        goToFinalResult()
      ) : (
        <div className="question-card">
          <h2>Question {counter + 1} out of 5</h2>
          <h2>{Questions[currentQuestion].text}</h2>
          <ul>
            {Questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainPage;
