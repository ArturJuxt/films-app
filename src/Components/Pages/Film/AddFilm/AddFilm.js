import React from "react";
import "./AddFilm.css";

function AddFilm() {
  return (
    <div className="film-add">
      <div className="add-film">
        <div className="add-film-img">
          <p>
            <span>Img Link:</span>
          </p>
          <input type="text" />
        </div>
        <div className="add-film-info">
          <div className="add-tittle">
            <p>
              <span>Title:</span>
            </p>
            <input type="text" placeholder="name" />
          </div>
          <div className="add-year">
            <p>
              <span>Year:</span>
            </p>
            <input type="number" />
          </div>
          <div className="add-type">
            <p>
              <span>Type:</span>
            </p>
            <select>
              <option></option>
              <option>Thriller</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Fantasy</option>
            </select>
          </div>
        </div>
        <div className="add-button">
          <button>Add</button>
        </div>
      </div>
      <div className="advertising">
        <img src="https://sensa.metropolitan.si/media/cache/upload/Photo/2020/12/23/zodiac-sign-4374405_1920_fbimage.jpg" alt="" />
      </div>
    </div>
  );
}

export default AddFilm;
