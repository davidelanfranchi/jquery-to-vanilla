import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
