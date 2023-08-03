import React from 'react'

function FinalResult({score,question}) {
    const getPopupTextAndLink = () => {
        if (score === 5) {
          return {
            text: 'Well done!',
            link: 'Click on this link to get the best offer from Upcloud Technology',
          };
        } else if (score > 3 && score < 5) {
          return {
            text: 'Very good!',
            link: 'Click on this link to get the best offer from Upcloud Technology',
          };
        } else {
          return {
            text: 'Sorry, play again.',
            link: null,
          };
        }
    };
    const{text,link}=getPopupTextAndLink();
  return (
    <div className="final-result">
      <h2>Score: {(score / question.length) * 100}%</h2>
      <h3>{text}</h3>
      {link?
        <h3>{link}</h3>
        :
        <button className="replay-button" >Replay</button>
      }
    </div>

  )
}

export default FinalResult;