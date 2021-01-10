import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../../Store/Actions/FilterAction";
import { getCategories, getFilter } from "../../../../Store/Selectors/";

import "./CategoriesFilter.css";

function CategoriesFilter() {
  const categories = useSelector(getCategories);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="film-main">
      <ul>
        <li onClick={() => dispatch(setFilter(0))}>All</li>
        {categories.map((cat) => (
          <li
            onClick={() => dispatch(setFilter(cat.id))}
            key={cat.id}
            className={filter === cat.id && "active"}
          >
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesFilter;
