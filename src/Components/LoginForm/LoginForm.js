import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

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


    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          localStorage.setItem("token", data.data);
            localStorage.setItem("loggedIn", true);
          navigate('/ResumeUploader');

        }
        else{
          window.alert("Invalid Credentials");
        }
      });


    // Search for user credentials
    // const currentUser = database.find((user) => user.email === email);

    // if (currentUser) {
    //   if (currentUser.password !== password) {
    //     // Wrong password
    //     setErrorMessages({ name: "password", message: errors.password });
    //   } else {
    //     // Correct password, log in user
    //     setErrorMessages({});
    //     setIsLoggedIn(true);
    //   }
    // } else {
    //   // Username doens't exist in the database
    //   setErrorMessages({ name: "email", message: errors.email });
    // }
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
              <p>Don't have an Account? <a href="/SignUpForm" className="small">Sign Up</a></p>
            </div>
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginForm;
