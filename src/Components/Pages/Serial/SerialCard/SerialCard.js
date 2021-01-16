import React from "react";
import "./SerialCard.scss";
import { useDispatch } from "react-redux";

import { deleteSerial } from "../../../../Store/Actions/SerialAction";

function SerialCard({ serial, onEdit }) {
  const dispatch = useDispatch();

  return (
    <div className="serial-form">
      <div>
        <div className="imgWrapper">
          <div
            className="form-img"
            style={{ background: `url(${serial.img})` }}
          ></div>
        </div>
        <h3 className="form-name">{serial.name || <span>No Name</span>}</h3>
        <h4 className="form-season">Season: {serial.num || 0}</h4>
      </div>
      <div className="buttons">
        <button
          className="but-ed"
          onClick={() => onEdit(serial)}
        >
          Edit
        </button>
        <button
          className="but-del"
          onClick={() => dispatch(deleteSerial(serial.id))}
        >
          Delete
        </button>
      </div>
      
    </div>
  );
}

export default SerialCard;
