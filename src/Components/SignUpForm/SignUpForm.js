import React, { useState } from "react";
import "./SignUpForm.css";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { database } from "../Utils/database";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noFirstname: "Please enter your First Name",
    noLastName: "Please enter your Last Name",
    noPassword: "Please enter your password"
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!email) {
        // Username input is empty
        setErrorMessages({ name: "noEmail", message: errors.noEmail });
        return;
    }

    if (!firstname) {
      // First Name input is empty
      setErrorMessages({ name: "noFirstname", message: errors.noFirstname });
      return;
    }

    if (!lastname) {
        // Last Name input is empty
        setErrorMessages({ name: "noLastname", message: errors.noLastname });
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
  // <Routes>
  //   <Route path="./LoginForm.jsx" element={<LoginForm/>}></Route>
  // </Routes>

  return (
    <div>
      <NavBar/>
      <div className="limiter">
        <div className="card-container">
          <div className="card">
            <h1 className="title">Sign Up</h1>
            <p className="subtitle">
              To keep connected with us please Sign Up with your personal info!
            </p>
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
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {renderErrorMsg("password")}
                {renderErrorMsg("noPassword")}
              </div>
              <input type="submit" value="Sign Up" className="signup_button" />
            </form>
            <div className="link_container">
              <p>Already Have an Account? <a href="/LoginForm" className="small">click here</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-width">
      </div>
      <Footer/>
    </div>
  );
};

export default SignUpForm;
