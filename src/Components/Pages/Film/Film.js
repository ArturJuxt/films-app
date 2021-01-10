import React from "react";
import "./Film.css";

import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import AddFilm from "./AddFilm/AddFilm";
import FilmForm from "./FilmForm/FilmForm";

function Film() {
  return (
    <div className="film">
      <CategoriesFilter />
      <FilmForm />
      <AddFilm />
    </div>
  );
}

export default Film;
