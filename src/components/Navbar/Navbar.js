import React from "react";
import logo from "../../assets/web-coding.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>portfolio</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
