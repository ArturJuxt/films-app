import React, { useState } from "react";
import "./InputField.scss";
import { useDispatch } from "react-redux";
import { addSerial } from "../../../../Store/Actions/SerialAction";
import { v1 as uuid } from "uuid";

function InputField() {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const dispatch = useDispatch();

  
  const newSerial = () => {
    console.log(link, "link");
    dispatch(
      addSerial({
        id: uuid(),
        link,
        name,
        num,
      })
    );
    setName("");
    setLink("");
    setNum("");
  };

  return (
    <div className="inputField">
      <div className="img-link">
        <span>Img Link: </span>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="season-name">
        <span>Name: </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="season-num">
        <span>Season: </span>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>

      <div className="add-button">
        <button onClick={() => newSerial()}>Add</button>
      </div>
    </div>
  );
}

export default InputField;
