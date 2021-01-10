import React from "react";
import "./MarvelList.css";
import { useSelector } from "react-redux";
import { getMarvels } from '../../../../Store/Selectors'

import MarvelForm from "../MarvelForm/MarvelForm";

function MarvelList() {
  const marvels = useSelector(getMarvels);

  return (
    <div className="marvelList">
      {marvels.map((marvel) => {
        return <MarvelForm marvel={marvel} />;
      })}
    </div>
  );
}

export default MarvelList;
