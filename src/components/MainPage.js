import React, { useState } from "react";
import Questions from "../Questions";
import FinalResult from "./FinalResult";

function MainPage() {
  const [result, setResult] = useState(false);
  const[currentQuestion, setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);

  function optionClicked(isCorrect){
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true);
    }
  }
  return (
    <div className="main-page">
    {result?
      <FinalResult
        score={score}
        question={Questions}
      />
      :
      <div className="question-card">
        <h2>Question {currentQuestion+1} out of 5</h2>
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
      }   
      
    </div>
  );
}

export default MainPage;
