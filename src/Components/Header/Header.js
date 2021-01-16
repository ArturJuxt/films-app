import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";


function Header() {

  return (
    <div className="header">
      <h2 className="logo"><NavLink to="home">My-Films</NavLink></h2>
      <ul className="active">
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
