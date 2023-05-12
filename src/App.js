import React, {Component} from 'react';
import SignUpForm from './ResumeParser/SignUpForm/SignUpForm';
import LoginForm from './ResumeParser/LoginForm/LoginForm'
import PdfUploader from './ResumeParser/LoggedIn/ResumeUploader';
import PdfUploader1 from './ResumeParser/LoggedIn/ResumeExtracter';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
    return (
      <div >
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="/SignUpForm" element={<SignUpForm/>}/>
          <Route path="/PdfUploader" element={<PdfUploader/>}/>
          <Route path="/PdfUploader1" element={<PdfUploader1/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    );
  
}

export default App;

/*import { useState } from "react";
import LoggedIn from "./ResumeParser/LoggedIn/LoggedIn";
import LoginForm from "./ResumeParser/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;*/
