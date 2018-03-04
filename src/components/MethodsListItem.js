import React, { Component } from "react";
import "./MethodsListItem.css";

class MethodsListItem extends Component {
  render() {
    return (
      <li className="MethodsListItem">
        <h2>{this.props.title}</h2>
      </li>
    );
  }
}

export default MethodsListItem;
