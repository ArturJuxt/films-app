import React from "react";
import "./FilmMain.css";

function FilmMain({ items, onClickItem }) {
  return (
    <div className="film-main">
      <ul>
        <li>All</li>
        {items.map((name, index) => (
          <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmMain;
