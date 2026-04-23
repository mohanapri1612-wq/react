import React from 'react' 
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import '../assets/CSS/Trainer.css'; 
 
const StudentLogin = ({ setStudentId, children }) => { 
 
  const [inputId, setInputId] = useState(""); // to get id from user 
  const navigate = useNavigate(); 
 
  const handleSubmit = () => { 
    setStudentId(inputId); // send id to App 
    navigate("/StudentDetails"); 
  }; 
     
  return ( 
    <div className='trainerCls'> 
       
      <h1>Student Login</h1> 
      <h4> {children} </h4> 
      <input  /*Controlled Component)*/ 
        type="text" 
        placeholder="Enter Student ID" 
        value={inputId} 
        onChange={(e) => setInputId(e.target.value)} 
      /> 
      <br></br> 
      <button onClick={handleSubmit}>Submit</button> 
    </div> 
  ); 
}; 
 
export default StudentLogin 
