import React from 'react';
import "./NavCont.css";

import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

function NavCont() {
    return (
        <div className="nav-cont">
            <NavBar />
            <Content />
        </div>
    )
}

export default NavCont
