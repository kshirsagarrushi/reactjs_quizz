import React from 'react'

function StartPage() {
  return (
    <div className="start">
        <h1>Responsive Quiz App</h1>
        <input type="text" className="input-name" placeholder="Enter your name"/>
        <button className="start-button">Start</button>
    </div>
  )
}

export default StartPage