import React, { useState } from "react";
import "./SignUpForm.css";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    noEmail: "Please enter your email",
    invalidEmail: "Please enter a valid email",
    noFirstname: "Please enter your First Name",
    noLastName: "Please enter your Last Name",
    noPassword: "Please enter your password",
    invalidPassword: "Password must be at least 8 characters long",
    userExists: "User already exists",
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessages({ name: "invalidEmail", message: errors.invalidEmail });
      return;
    }

    if (!firstname) {
      setErrorMessages({ name: "noFirstname", message: errors.noFirstname });
      return;
    }

    if (!lastname) {
      setErrorMessages({ name: "noLastname", message: errors.noLastName });
      return;
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    if (password.length < 8) {
      setErrorMessages({
        name: "invalidPassword",
        message: errors.invalidPassword,

      });
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        email,
        lastname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          setSuccessMessage("Account created successfully"); // Set success message
          setTimeout(() => {
            navigate("/LoginForm");
          }, 2000); // Navigate to the login page after 1 second
        } else {
          setErrorMessages({ name: "userExists", message: errors.userExists });
          return;
        }
      });
  };

  const validateEmail = (email) => {
    // Simple email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

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
            <h1 className="title">Sign Up</h1>
            <p className="subtitle">
              To keep connected with us please Sign Up with your personal info!
            </p>
            {successMessage && (
              <p className="success_msg">{successMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="inputs_container">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {renderErrorMsg("firstname")}
                {renderErrorMsg("noFirstname")}
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                {renderErrorMsg("lastname")}
                {renderErrorMsg("noLastname")}
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {renderErrorMsg("email")}
                {renderErrorMsg("noEmail")}
                {renderErrorMsg("invalidEmail")} {/* Added error message */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {renderErrorMsg("password")}
                {renderErrorMsg("noPassword")}
                {renderErrorMsg("invalidPassword")} {/* Added error message */}
              </div>
              <input type="submit" value="Sign Up" className="signup_button" />
              {renderErrorMsg("userExists")}
            </form>
            <div className="link_container">
              <p>
                Already have an Account?{" "}
                <a href="/LoginForm" className="small">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-width"></div>
      <Footer />
    </div>
  );
};

export default SignUpForm;