import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoggedInNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href="./LoginForm";
  }
  
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
                to="/Contact"
                activeClassName="active"
                className="nav-links-header"
                onClick={handleLogout}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon-header" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> 
        </div>
      </nav>
    </>
  );
}

export default LoggedInNavbar;