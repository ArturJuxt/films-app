import React, { useState } from "react";
import "./SerialForm.scss";
import { useDispatch } from "react-redux";
import {
  addSerial,
  updateSerial,
} from "../../../../Store/Actions/SerialAction";
import { v1 as uuid } from "uuid";

function SerialForm({ serial, onSave }) {
  const [link, setLink] = useState(serial?.img);
  const [name, setName] = useState(serial?.name);
  const [num, setNum] = useState(serial?.num);
  const dispatch = useDispatch();

  const newSerial = () => {
    const currentSerial = {
      id: serial?.id || uuid(),
      img: link,
      name,
      num,
    };

    if (serial?.id) {
      dispatch(updateSerial(currentSerial));
    } else {
      dispatch(addSerial(currentSerial));
    }

    setName("");
    setLink("");
    setNum("");
    onSave();
  };

  return (
    <div className="inputField">
      <div className="img-link">
        <div className="bold">Img Link: </div>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="season-name">
        <div className="bold">Name: </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="season-num">
        <div className="bold">Season: </div>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>

      <div className="modal-footer">
        <button className="close" onClick={onSave}>
          Close
        </button>
        <button className="save" onClick={() => newSerial()}>
          {serial?.id ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default SerialForm;
