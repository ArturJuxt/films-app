import React, { useState, useEffect } from "react";
import "./MarvelList.css";
import { useSelector } from "react-redux";
import { getMarvels, getSearch } from "../../../../Store/Selectors";

import MarvelForm from "../MarvelForm/MarvelForm";

function MarvelList() {
  const search = useSelector(getSearch);
  const marvels = useSelector(getMarvels);
  const [filterMarvel, setFilterMarvel] = useState([]);

  useEffect(() => {
    setFilterMarvel(
      marvels.filter((marvel) => {
        return marvel.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, marvels]);

  return (
    <div>
      <div className="marvelList">
        {!filterMarvel[0] ? (
          <div className="text-search">No Search Marvel Movies</div>
        ) : (
          filterMarvel.map((marvel, index) => {
            return <MarvelForm key={index} marvel={marvel} />;
          })
        )}
      </div>
    </div>
  );
}

export default MarvelList;
