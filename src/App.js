import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Partial from './pages/Partial';

import NpsReport from './pages/NpsReport';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp';
import Detailed from './pages/Detailed';

function App() {
 
  const [userId,setUserId] =useState(null);
  const [isAuth,setIsAuth] = useState(false);
  const [votes,setVotes]= useState([]);
  const [vote,setVote]=useState();
  
  
  useEffect(()=>{
      setUserId(localStorage.getItem("UserId"));
      
  },[isAuth,vote])
  
  
  return (
  
    <div>
      <Router>
        <div className="main-navbar">
        {userId && <Navbar  isAuth={isAuth} setIsAuth={setIsAuth}/>} 
        </div>
        <Routes>
           <Route path="/nps-report" element={<NpsReport votes={votes} setVotes={setVotes} setVote={setVote}/>} />
           <Route path="/partial-result" element={<Partial />} />
          <Route path="/" element ={!userId &&<Login setIsAuth={setIsAuth}/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
         <Route path="/detailed" element={<Detailed vote={vote}/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
