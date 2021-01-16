import React from "react";
import "./MarvelForm.scss";
import { useDispatch } from "react-redux";
import { deleteMarvel } from "../../../../Store/Actions/MarvelAction";

function MarvelForm({ marvel }) {
  const dispatch = useDispatch();
  return (
    <div className="marvel-form">
      <div className="form">
        <div className="form-img">
          <img src={marvel.img} alt="img" />
        </div>
        <div className="form-name">
          <h3>{marvel.title}</h3>
        </div>
        <div className="form-year">
          <p>Year: {marvel.year}</p>
        </div>
        <div>
          {marvel.categories.map((cat, index) => {
            return <div key={index} className="category">{cat}</div>;
          })}
        </div>
      </div>
      <div className="button">
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => dispatch(deleteMarvel(marvel.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default MarvelForm;
