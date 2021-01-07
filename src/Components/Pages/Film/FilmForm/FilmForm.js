import React from 'react';
import "./FilmForm.css";


import FilmData from "../../../../data/Films.json";

function FilmForm() {
    return (
        <div className="form">
        {FilmData.map((filmDetail, index) => {
          return (
            <div key={filmDetail.id} className="block">
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
                  {filmDetail.categories}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    )
}

export default FilmForm
