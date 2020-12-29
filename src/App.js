import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Router from "./Components/Routers/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
            <Router />
        <div className="nav-cont">
          <NavBar />
          <Content />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
