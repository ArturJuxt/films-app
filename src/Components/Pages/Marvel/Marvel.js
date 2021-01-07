import React from 'react';
import "./Marvel.css";

import MarvelList from "./MarvelList/MarvelList";
import MarvelInput from "./MarvelInput/MarvelInput";

function Marvel() {
    return (
        <div className="marvel">
            <MarvelList />
            <MarvelInput />
        </div>
    )
}

export default Marvel
