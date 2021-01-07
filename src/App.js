import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Router from "./Components/Routers/Router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Store/Reducers/RootReducer";

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
