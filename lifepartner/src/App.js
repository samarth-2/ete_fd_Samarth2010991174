import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './components/organism/home';
import Profilepage from './components/organism/profilepage';
import Login from './components/organism/login';
import Searchresults from './components/organism/searchresults';
import Matches from './components/organism/matches';
import { useState } from 'react';
import Signup from './components/organism/signup';
const App=()=> {

  
  const[loggedinstatus,setLoggedinstatus]=useState({
    login:"false",
    email:""
  })

  function changeLogin(x,email)
  {
    setLoggedinstatus({
      login:x,
      email:email
    })
  }



 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  loggedinstatus={loggedinstatus} changeLogin={changeLogin}  />} ></Route>
        <Route path="/profilepage" element={<Profilepage loggedinstatus={loggedinstatus}  changeLogin={changeLogin}  />} ></Route>
        <Route path="/login" element={<Login loggedinstatus={loggedinstatus}  changeLogin={changeLogin}  />}  ></Route>
        <Route path="/searchresults" element={<Searchresults  />} ></Route>
        <Route path="/matches" element={<Matches loggedinstatus={loggedinstatus}  changeLogin={changeLogin}  />} ></Route>
        <Route path="/signup" element={<Signup loggedinstatus={loggedinstatus}  changeLogin={changeLogin}  />} ></Route>
      </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
