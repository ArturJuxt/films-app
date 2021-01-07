import React from "react";
import "./Serial.css";

import SerialList from "./SerialList/SerialList";
import InputField from "./InputField/InputField";

function Serial() {
  return (
    <div className="serial">
      <SerialList />
      <InputField />
    </div>
  );
}

export default Serial;
