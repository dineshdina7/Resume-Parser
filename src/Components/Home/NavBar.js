/*import  React from "react";


const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
      </div>
      <div className="navbar-links-container">
        <a href="SignUpForm">Sign Up</a>
        <a href="/LoginForm">Login</a>
        
        <button className="primary-button">Resume Parser</button>
      </div>
    </nav>
  )
}

export default Navbar;*/

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar-header">
        <div className="nav-container-header">
          <NavLink  className="nav-logo-header">
            {"Resume "}
            <span className="text-color-pink">Parser</span>
          </NavLink>
          <ul className={click ? "nav-menu-header active" : "nav-menu-header"}>
            <li className="nav-item-header">
              <NavLink
                exact
                to="/Home"
                activeClassName="active"
                className="nav-links-header"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item-header">
              <NavLink
                exact
                to="/SignUpForm"
                activeClassName="active"
                className="nav-links-header"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item-header">
              <NavLink
                exact
                to="/LoginForm"
                activeClassName="active"
                className="nav-links-header"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            {/* <li className="nav-item-header">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links-header"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon-header" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> 
        </div>
      </nav>
    </>
  );
}

export default NavBar;