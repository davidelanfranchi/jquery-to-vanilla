import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MethodsListItem.css";

class MethodsListItem extends Component {
  render() {
    return (
      <li className="MethodsListItem">
        <Link to={`/${this.props.categoryId}/${this.props.methodId}`}>
          <h2>{this.props.title}</h2>
        </Link>
      </li>
    );
  }
}

export default MethodsListItem;
