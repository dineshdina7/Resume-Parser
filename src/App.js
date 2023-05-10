/*import React, {Component} from 'react';
import SignUpForm from './ResumeParser/SignUpForm/SignUpForm';
import './App.css';
import PdfUploader from './ResumeParser/ResumeParser';
import PdfUploader1 from './ResumeParser/ResumeForm';

class App extends Component {
  render(){
    return (
        <div >
          <SignUpForm/>
      </div>
      
    );
  }
  
}

export default App;*/

import { useState } from "react";
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

export default App;
