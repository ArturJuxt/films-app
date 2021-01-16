import React, { useMemo } from "react";
import "./FilmForm.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  getFilms,
  getFilter,
} from "../../../../Store/Selectors";
import { deleteFilm } from "../../../../Store/Actions/FilmAction";
import { convertToMap } from "../../../../helpers";

function FilmForm() {
  const filmData = useSelector(getFilms);
  const categories = useSelector(getCategories);
  const filter = useSelector(getFilter);
  const categoriesMap = convertToMap(categories);
  const dispatch = useDispatch();

  const films = useMemo(() => {
    return !filter
      ? filmData
      : filmData.filter((film) => film.categories.includes(filter));
  }, [filter, filmData]);

  return (
    <div className="form">
      {films.map((filmDetail) => {
        return (
          <div key={filmDetail.id} className="block">
            <div className="image-wrapper">
              <div
                className="img"
                style={{ background: `url(${filmDetail.img})` }}
              ></div>
            </div>
            <div className="title">
              <h1>{filmDetail.title || <span>No Title</span>}</h1>
            </div>
            <div className="year-type">
              <div>
                <span>Year:</span>
                {filmDetail.year || 0}
              </div>
              <div className="type">
                <div>
                  <span>Type:</span>
                </div>
                {!filmDetail.categories.length
                  ? "No Type"
                  : filmDetail.categories.map((categoryId) => {
                      return (
                        <div key={categoryId}>
                          {categoriesMap.get(categoryId).title}
                        </div>
                      );
                    })}
              </div>
            </div>
            <div className="film-delete">
              <button onClick={() => dispatch(deleteFilm(filmDetail.id))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FilmForm;
