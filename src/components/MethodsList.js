import React, { Component } from "react";

import "./MethodsList.css";

import { methods } from "../data/data.json";

import MethodsListItem from "./MethodsListItem";

class MethodsList extends Component {
  render() {
    this.list = Object.values(methods).map(method => {
      return (
        <MethodsListItem
          key={method.id}
          methodId={method.id}
          categoryId={method.categoryId}
          title={method.title}
        />
      );
    });
    return <ul className="MethodsList">{this.list}</ul>;
  }
}

export default MethodsList;
