import React from 'react';
import Home from './Components/Home/Home';
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import ResumeUploader from "./Components/LoggedIn/ResumeUploader"
import ResumeExtracter from './Components/LoggedIn/ResumeExtracter';
import About from './Components/Home/About';
import Work from "./Components/Home/Work";
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
    return (
      <div >
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/SignUpForm" element={<SignUpForm/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="ResumeUploader" element={<ResumeUploader/>}/>
          <Route path="ResumeExtracter" element={<ResumeExtracter/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Work" element={<Work/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    );
  
}

export default App;