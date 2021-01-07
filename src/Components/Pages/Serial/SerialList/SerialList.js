import React from "react";
import "./SerialList.scss";

import SerialForm from "../SerialForm/SerialForm";
import { useSelector } from "react-redux";
import { getSerials } from "../../../../Store/Selectors/";

function SerialList() {
  const serials = useSelector(getSerials);

 

  return (
    <div className="serialList">
      {serials.map((serial) => {
        return <SerialForm key={serial.id} serial={serial} />;
      })}  
    </div>
  );
}

export default SerialList;
