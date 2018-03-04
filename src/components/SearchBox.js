import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <form role="search">
          <input
            type="search"
            placeholder="Type a jQuery method"
            aria-label="Search through jQuery methods"
          />
        </form>
      </div>
    );
  }
}

export default SearchBox;
