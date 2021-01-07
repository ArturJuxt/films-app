import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {
  return (
    <div className="header">
      <h2><NavLink to="home">My-Films</NavLink></h2>
      <ul>
        <li><NavLink to="film">Film</NavLink></li>
        <li><NavLink to="serial">Serial</NavLink></li>
        <li><NavLink to="marvel">Marvel</NavLink></li>
        <li><NavLink to="netflix">Netflix</NavLink></li>
      </ul>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Header;
