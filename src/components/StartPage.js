import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate=useNavigate();
    function goToMain(){
        navigate('/main');
    }
  return (
    <div className="start">
        <h1>Responsive Quiz App</h1>
        <input type="text" className="input-name" placeholder="Enter your name"/>
        <button className="start-button" onClick={goToMain}>Start</button>
    </div>
  )
}

export default StartPage;