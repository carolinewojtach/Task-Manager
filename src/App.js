import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <Navbar />
        <div className="container">
          <Board />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
