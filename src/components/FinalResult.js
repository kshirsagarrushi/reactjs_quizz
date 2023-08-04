import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import questions from '../Questions'

function FinalResult() {
  
  const location=useLocation();
  const navigate=useNavigate();
    const getPopupTextAndLink = () => {
        if (location.state.score === 5) {
          return {
            text: 'Well done!',
            link: 'Click on this link to get the best offer from Upcloud Technology',
          };
        } else if (location.state.score > 3 && location.state.score < 5) {
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

    function goToMain(){
      navigate('/main');
    }
    
  return (
    <div className="final-result">
      <h2>Score: {(location.state.score / questions.length) * 100}%</h2>
      <h3>{text}</h3>
      {link?
        <h3>{link}</h3>
        :
        <button className="replay-button" onClick={goToMain} >Replay</button>
      }
    </div>

  )
}

export default FinalResult;