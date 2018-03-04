import React, { Component } from "react";

import "./Method.css";
import "./Method-hljs-styles.css";

import { categories } from "../data/data.json";

class Method extends Component {
  render() {
    let category = this.props.match.params.category;
    let method = this.props.match.params.method;
    let methodData = categories[category].methods[method];

    return (
      <div className="Method">
        <h2>Method</h2>
        <p>{methodData.title}</p>
        <div dangerouslySetInnerHTML={{ __html: methodData.body }} />
      </div>
    );
  }
}

export default Method;
