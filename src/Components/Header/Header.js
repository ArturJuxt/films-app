import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { setSearch } from "../../Store/Actions/SearchAction";
import { getSearch } from "../../Store/Selectors";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const name = useSelector(getSearch);

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
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}

export default Header;
