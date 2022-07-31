import React, { useState }  from 'react';
import { useRef } from 'react';
import Topbar from './Components/topbar.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/home'
import Login from './Components/Login';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import { useNavigate } from 'react-router';
import Ordered from './Components/ordered';
import AdminScreen from './Screens/AdminScreen.jsx';
import Userlist from './Components/Admin/Userlist';
import Adminlogin from './Screens/adminlogin';
import axios from 'axios';
import emailjs from '@emailjs/browser';




function App() {
  const [user,setLoginUser]=useState({})
  const [post,setpost]=useState({})

  return (
    <>
    <BrowserRouter>
    <Topbar />
    
    <Routes>
    <Route path="/admin/*" element={<AdminScreen/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/ordered" element={<Ordered/>} />
          <Route path="/success" element={<Login/>} />
          <Route path="/login" element={<LoginScreen/>}>
          

          </Route>

          <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
