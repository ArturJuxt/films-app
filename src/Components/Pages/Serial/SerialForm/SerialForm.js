import React from "react";
import "./SerialForm.scss";
import { useDispatch } from "react-redux";

import { deleteSerial } from "../../../../Store/Actions/SerialAction";

function SerialForm({ serial }) {
  const dispatch = useDispatch();

  return (
    <div className="serial-form">
      <div>
        <div className="form-img">
          <img src={serial.img} alt="img" />
        </div>
        <h3 className="form-name">{serial.name}</h3>
        <h4 className="form-season">
          Season: {serial.num}
        </h4>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={() => dispatch(deleteSerial(serial.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SerialForm;
