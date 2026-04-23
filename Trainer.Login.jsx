import React from 'react' 
import '../assets/CSS/Trainer.css'; 
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
 
const TrainerLogin = ({ setTrainerId, children }) => { 
 
  const [inputId, setInputId] = useState(""); 
  const navigate = useNavigate(); 
 
//// TrainerLogin -> sends ID -> App -> passes to TrainerDetails 
  const handleSubmit = () => { 
    setTrainerId(inputId); // send to App 
    navigate("/TrainerDetails"); 
  }; 
 
  return ( 
    <div className='trainerCls'> 
 
      <h1>Trainer Login</h1> 
      <h4> {children}  </h4> 
       
      <input /*Controlled Component)*/ 
        type="text" 
        placeholder="Enter Trainer ID" 
        value={inputId} 
        onChange={(e) => setInputId(e.target.value)} 
      /> 
      <br></br> 
      <button onClick={handleSubmit}>Submit</button> 
    </div> 
  ); 
}; 
 
export default TrainerLogin;
