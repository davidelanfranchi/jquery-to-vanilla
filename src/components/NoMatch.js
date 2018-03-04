import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NoMatch.css";

class NoMatch extends Component {
  render() {
    return (
      <div className="NoMatch">
        <h2>NoMatch</h2>
        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default NoMatch;
