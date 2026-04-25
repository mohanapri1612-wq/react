import React from "react"; 
import { useState } from "react"; // ADD TO SEND STATE VARIABLES EG : setTrainerId 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import About from "./views/About";
import Home from "./views/Home"; 
import StudentsProfile from "./views/StudentsProfile"; 
import Courses  from "./views/Courses";


import "./assets/CSS/NavCSS.css"; 
import "./assets/CSS/HomeCSS/Home.css";
import "./assets/CSS/Footer.css"; 
import StudentLogin from "./views/StudentLogin"; 
import TrainerLogin from "./views/TrainerLogin"; 
import StudentDetails from "./views/StudentDetails"; 
import TrainerDetails from "./views/TrainerDetails"; 
import PlacedStudents from "./views/ReactFeatures/PlacedStudents";


import Controlled_Component from "./views/ReactFeatures/Controlled_Component"; 
import UseEffectHook_List_Keys from "./views/ReactFeatures/UseEffectHook_List_Keys"; 
import Props_Parent from "./views/ReactFeatures/Props_Parent"; 
import Children_Parent from "./views/ReactFeatures/Children_Parent"; 
import MultiInputs_Controlled_Components from 
"./views/ReactFeatures/MultiInputs_Controlled_Components"; 
import Uncontrolled_Component from "./views/ReactFeatures/Uncontrolled_Component"; 

 
const App = () => { 
// TrainerLogin -> sends ID -> App -> passes to TrainerDetails 
  const [studentId, setStudentId] = useState(""); //App.jsx (stores data) 
  const [trainerId, setTrainerId] = useState(""); 
 
  return ( 
    <>    
    <Router> 
      <div className="navbarCls"> 
 
        <div style={{color : "Blue" , fontSize: "56px"}}> SLA </div> 
            <nav> 
              <ul style={{ display: "flex", gap: "2rem" , listStyle: "none" }}> 
                <li><Link to="/About">About</Link></li>
                <li><Link to="/">Home</Link></li>         
                <li><Link to="/Courses">Courses</Link></li>  
                <li><Link to="/StudentsProfile">StudentsProfile</Link></li>  
              </ul> 
            </nav> 
      </div> 
           
          {/*Links for React Features */} 
          <nav> 
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}> 
              <li><Link to="/Controlled_Component">Controlled Component</Link></li> 
              <li><Link to="/UseEffectHook_List_Keys">UseEffectHook Listand Keys</Link></li> 
              <li><Link to="/Props_Parent">Props Parent</Link></li> 
              <li><Link to="/Children_Parent">Children Parent</Link></li> 
              <li><Link to="/MultiInputs_Controlled_Components">MultiInputs Controlled 
Components</Link></li>   
 
              <li><Link to="/Uncontrolled_Component">Uncontrolled Component</Link></li>  
            </ul> 
          </nav> 
<br></br> 
<br></br> 
      <Routes> 
        <Route path="/About" element ={<About/>} />
        <Route path="/" element={<Home />} />   
        <Route path="/Courses" element={<Courses />} /> 
        <Route path="/StudentsProfile" element={<StudentsProfile />} /> 
        
        <Route path="/Controlled_Component" element={<Controlled_Component />} /> 
        <Route path="/UseEffectHook_List_Keys" element={<UseEffectHook_List_Keys />} /> 
        <Route path="/Props_Parent" element={<Props_Parent />} /> 
        <Route path="/Children_Parent" element={<Children_Parent />} /> 
        <Route path="/MultiInputs_Controlled_Components" 
element={<MultiInputs_Controlled_Components />} /> 
         <Route path="/Uncontrolled_Component" element={<Uncontrolled_Component />} /> 
 
        {/* Pass setter functions as props + children */} 
        <Route path="/StudentLogin" element={ 
                                            <StudentLogin setStudentId={setStudentId}> 
                                              <p>Welcome Student</p> 
                                            </StudentLogin> 
                                            } 
                                            /> 
                                             
        <Route path="/TrainerLogin" element={ 
                                            <TrainerLogin setTrainerId={setTrainerId}> 
                                              <p>Welcome Trainer </p>  
                                            </TrainerLogin>  
                                            }  
                                            /> 
                <Route path="/StudentDetails" element = {<StudentDetails id={studentId}/>}/> 
                <Route path="/TrainerDetails" element = {<TrainerDetails id={trainerId}/>}/> 

      </Routes> 
    </Router> 
    
    <br></br> 
    <br></br> 
         <footer className="footer"> 
          <p>© 2026 My Website. All rights reserved.</p> 
          <p>Contact: SoftLogic@Sytems.com</p> 
        </footer> 
<br></br> 
    </> 
  ); 
}; 
 
export default App; 
