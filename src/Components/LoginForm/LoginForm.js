import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { database } from "../../Components/Utils/database";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate= useNavigate();

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();
    navigate('/ResumeUploader');

    if (!email) {
      // Email input is empty
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.email === email);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div>
      <NavBar/>
      <div className="limiter">
        <div className="card-container">
          <div className="card">
            <h1 className="title">Sign In</h1>
            <p className="subtitle">
              Please log in using your username and password!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputs_container">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {renderErrorMsg("email")}
                {renderErrorMsg("noEmail")}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {renderErrorMsg("password")}
                {renderErrorMsg("noPassword")}
              </div>
              <input type="submit" value="Log In" className="login_button"/>
            </form>
            <div className="link_container">
              <p>Don't Have an Account? <a href="/SignUpForm" className="small">click here</a></p>
            </div>
              {/* <div className="icons">
                <GoogleIcon className="icon" />
                <FacebookIcon className="icon" />
                <TwitterIcon className="icon" />
              </div>  */}
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginForm;
