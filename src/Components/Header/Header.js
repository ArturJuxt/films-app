import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2>My-Films</h2>
      <ul>
        <li><NavLink to="Film">Film</NavLink></li>
        <li><NavLink to="Serial">Serial</NavLink></li>
        <li>Clip</li>
        <li>Music</li>
      </ul>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Header;
