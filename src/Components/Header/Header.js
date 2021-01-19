import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [name, setName] = useState("")

  return (
    <div className="header">
      <h2 className="logo">
        <NavLink to="home">My-Films</NavLink>
      </h2>
      <ul className="active">
        <li>
          <NavLink to="film">Film</NavLink>
        </li>
        <li>
          <NavLink to="serial">Serial</NavLink>
        </li>
        <li>
          <NavLink to="marvel">Marvel</NavLink>
        </li>
        <li>
          <NavLink to="netflix">Netflix</NavLink>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Header;
