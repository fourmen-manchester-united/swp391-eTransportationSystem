import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">ioto</Link>
        </div>
        <div className="menu-container">
          <ul className="navbar-nav">{props.children}</ul>
        </div>
      </div>
      <div className="left-decoration">
        <img src="assets/fonts/left.c988b015.svg" alt="" />
      </div>
      <div className="right-decoration">
        <img src="assets/fonts/right.0b1bf774.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
