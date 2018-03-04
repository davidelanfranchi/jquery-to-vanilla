import React, { Component } from "react";
import "./Sidebar.css";

import SearchBox from "./SearchBox";
import MethodsList from "./MethodsList";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar-top">
          <SearchBox />
        </div>
        <div className="Sidebar-bottom">
          <MethodsList />
        </div>
      </div>
    );
  }
}

export default Sidebar;
