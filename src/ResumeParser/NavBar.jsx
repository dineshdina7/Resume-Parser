/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {

  return (
    <div className="nav">
      <div className="nav-logo-container">
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Sign Up</a>
        <a href="">Contact</a>
        <button className="primary-button-navbar">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
