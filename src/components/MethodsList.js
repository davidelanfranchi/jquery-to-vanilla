import React, { Component } from "react";

import "./MethodsList.css";

import { categories } from "../data/data.json";

import MethodsListItem from "./MethodsListItem";

class MethodsList extends Component {
  render() {
    this.list = Object.values(categories).map(category => {
      return Object.values(category.methods).map(method => {
        return (
          <MethodsListItem
            key={method.id}
            methodId={method.id}
            categoryId={category.id}
            title={method.title}
          />
        );
      });
    });
    return <ul className="MethodsList">{this.list}</ul>;
  }
}

export default MethodsList;
