import React, { Component } from "react";
import "./MethodsList.css";

import { createKeyFromString } from "../utils/Utils";

import { categories } from "../data/data.json";

import MethodsListItem from "./MethodsListItem";

class MethodsList extends Component {
  render() {
    this.list = Object.values(categories).map(category => {
      return Object.values(category.methods).map(method => {
        return (
          <MethodsListItem
            key={createKeyFromString(method.title)}
            title={method.title}
          />
        );
      });
    });
    return <ul className="MethodsList">{this.list}</ul>;
  }
}

export default MethodsList;
