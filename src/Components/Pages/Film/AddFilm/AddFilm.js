import React, { useState } from "react";
import "./AddFilm.css";
import { v1 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addFilm } from "../../../../Store/Actions/FilmAction";
import { getCategories } from "../../../../Store/Selectors";

function AddFilm() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector(getCategories)

  const newFilm = () => {
    dispatch(
      addFilm({
        id: uuid(),
        img,
        title,
        year,
        categories: category ? [+category] : [],
      })
    );
    setImg("");
    setTitle("");
    setYear("");
    setCategory("");
  };

  return (
    <div className="film-add">
      <div className="add-film">
        <div className="add-film-img">
          <p>
            <span>Img Link:</span>
          </p>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="add-film-info">
          <div className="add-tittle">
            <p>
              <span>Title:</span>
            </p>
            <input
              type="text"
              placeholder="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="add-year">
            <p>
              <span>Year:</span>
            </p>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="add-type">
            <p>
              <span>Type:</span>
            </p>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option></option>
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option>)}
            </select>
          </div>
        </div>
        <div className="add-button">
          <button onClick={() => newFilm()}>Add</button>
        </div>
      </div>
      <div className="advertising">
        <img
          src="https://sensa.metropolitan.si/media/cache/upload/Photo/2020/12/23/zodiac-sign-4374405_1920_fbimage.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AddFilm;
