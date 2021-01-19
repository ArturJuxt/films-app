import React, { useState, useEffect } from "react";
import "./MarvelList.css";
import { useSelector } from "react-redux";
import { getMarvels } from "../../../../Store/Selectors";

import MarvelForm from "../MarvelForm/MarvelForm";

function MarvelList() {
  const [search, setSearch] = useState("");
  const [filterMarvel, setFilterMarvel] = useState([]);
  const marvels = useSelector(getMarvels);

  useEffect(() => {
    setFilterMarvel(
      marvels.filter((marvel) => {
        return marvel.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, marvels]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
