import React, { useState, useEffect } from "react";
import Questions from "../Questions";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const [result, setResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [remainingQuestionIndices, setRemainingQuestionIndices] = useState([]);
  const [optionClass, setOptionClass] = useState("");
  const navigate = useNavigate();

  // Initialize remainingQuestionIndices on component mount
  useEffect(() => {
    setRemainingQuestionIndices([...Array(Questions.length).keys()]);
  }, []);

  function optionClicked(isCorrect, id) {
    setSelectedOption(id);
    setOptionClass(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore(score + 1);
    }
    if (counter + 1 < Questions.length && counter+1<5) {
      // Remove the current question index from the remainingQuestionIndices
      const updatedRemainingIndices = remainingQuestionIndices.filter(
        (index) => index !== currentQuestionIndex
      );

      if (updatedRemainingIndices.length > 0) {
        const randomIndex =
          updatedRemainingIndices[
            Math.floor(Math.random() * updatedRemainingIndices.length)
          ];
        setCurrentQuestionIndex(randomIndex);
        setRemainingQuestionIndices(updatedRemainingIndices);
        setCounter(counter + 1);
        // setSelectedOption(null);
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
        <>
          <div className="question-card">
            
            <h2>{counter + 1}/5</h2>
            <h2>{Questions[currentQuestionIndex].text}</h2>
            <ul>
              {Questions[currentQuestionIndex].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect, option.id)}
                    className={optionClass}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default MainPage;
