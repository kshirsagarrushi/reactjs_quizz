import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate=useNavigate();
    const [name,setName]=useState("");

    function goToMain(){
        navigate('/main');
    }
    
  return (
    <div className="start">
        <h1>Responsive Quiz App</h1>
        <input 
        type="text" 
        className="input-name" 
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        {
          name?
          <button className="start-button" onClick={goToMain}>Start</button>
          :<h3>Please Enter Your Name!!</h3>
        }
    </div>
  )
}

export default StartPage;