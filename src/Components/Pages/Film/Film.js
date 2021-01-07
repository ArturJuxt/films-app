import React from "react";
import "./Film.css";

import FilmMain from "./FilmMain/FilmMain";
import AddFilm from "./AddFilm/AddFilm";
import FilmForm from "./FilmForm/FilmForm";

function Film() {
  return (
    <div className="film">
      <FilmMain
        onClickItem={(name) => console.log(name)}
        items={["Thriller", "Action", "Comedy", "Fantasy"]}
      />
      <FilmForm />
      <AddFilm />
    </div>
  );
}

export default Film;
