import React, { Component } from "react";
import "./Sidebar.css";

import SearchBox from "./SearchBox";
import MethodsList from "./MethodsList";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <SearchBox />
        <MethodsList />
      </div>
    );
  }
}

export default Sidebar;
