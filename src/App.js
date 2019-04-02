import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <Navbar />
          <Board />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
