import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!password) {
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
        if (data.status === "ok") {
          setLoginSuccess(true);
          localStorage.setItem("token", data.data);
          localStorage.setItem("loggedIn", true);
          setTimeout(() => {
            navigate("/ResumeUploader"); // Redirect to the next page after a delay
          }, 1000); // Delay for 1 second

        } else if (data.status === "invalidUsername") {
          setErrorMessages({
            name: "invalidUsername",
            message: "Invalid username",
          });
          setPassword(""); // Reset the password field
        } else {
          setErrorMessages({
            name: "invalidCredentials",
            message: "Invalid credentials",
          });
          setPassword(""); // Reset the password field
        }
      });
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div>
      <NavBar />
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
                {renderErrorMsg("invalidUsername")}
                {renderErrorMsg("invalidCredentials")}
                {loginSuccess && (
                  <p className="success_msg">Login successful!</p>
                )}
              </div>
              <input type="submit" value="Log In" className="login_button" />
            </form>
            <div className="link_container">
              <p>
                Don't have an Account?{" "}
                <a href="/SignUpForm" className="small">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;