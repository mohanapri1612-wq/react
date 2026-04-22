import React  from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home  from "./views/Home";
import About from "./views/About";
import UserProfile from "./views/UserProfile";
import "./assets/CSS/NavCSS.css";

const App=() =>{
  return(
    <>
    <header>Header Component</header>
    <Router>
      <div className="navbarcls">
        <div>My React App</div>
        <nav>
          <ul style={{display: "flex", gap:"2rem"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/UserProfile">UserProfile</Link></li>
          </ul>
        </nav>
        </div>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/About" element={<About />}  />
          <Route path ="/UserProfile" element={<UserProfile />} />
        </Routes>
    </Router> 
    <main>Main Component</main>
    
    <br></br>
    <br></br>

    <footer>Footer Component</footer>
    <br></br>
    </>
  );
};
export default App
