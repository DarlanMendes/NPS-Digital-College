import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NpsReport from './pages/NpsReport';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp';


function App() {
 
  const [userId,setUserId] =useState(null);
  const [isAuth,setIsAuth] = useState(false);
  const [votes,setVotes]= useState([]);
  const [vote,setVote]=useState();
  const[registerAllowed,setRegisterAllowed]=useState(false);
  
  useEffect(()=>{
      setUserId(localStorage.getItem("UserId"));
      
  },[isAuth,vote])
  
  
  return (
  
    <div>
      <Router>
        <div className="main-navbar">
        {localStorage.getItem("UserId")&& <Navbar  isAuth={isAuth} setIsAuth={setIsAuth}/>} 
        </div>
        <Routes>
           <Route path="/nps-report"  element={<NpsReport isAuth={isAuth} votes={votes} setVotes={setVotes} setVote={setVote}/>} />
          <Route path="/" element ={<Login isAuth={isAuth} setIsAuth={setIsAuth} setRegisterAllowed={setRegisterAllowed}/>}/>
          <Route path='/sign-up' element={<SignUp registerAllowed={registerAllowed}/>}/>
         
        </Routes>
      </Router>
    </div>

  );
}

export default App;
