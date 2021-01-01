import React from "react";
import "./Film.css";

import FilmData from "../../../data/Films.json";

function Film() {
  return (
    <div className="film">
      <div className="film-main">
        <ul>
          <li>Thriller</li>
          <li>Action</li>
          <li>Comedy</li>
          <li>Fantasy</li>
        </ul>
      </div>
      <div className="form">
        {FilmData.map((filmDetail, index) => {
          return (
            <div className="block">
              <div>
                <img src={filmDetail.img} alt="" />
              </div>
              <div className="title">
                <h1>{filmDetail.title}</h1>
              </div>
              <div className="year-type">
                <p>
                  <span>Year:</span>
                  {filmDetail.year}
                </p>
                <p>
                  <span>Type:</span>
                  {filmDetail.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
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
    </div>
  );
}

export default Film;
