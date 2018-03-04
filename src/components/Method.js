import React, { Component } from "react";

import "./Method.css";
import "./Method-hljs-styles.css";

import { methods } from "../data/data.json";

class Method extends Component {
  render() {
    const method = methods[this.props.match.params.method];
    return (
      <div className="Method">
        <h2>Method</h2>
        <p>{method.title}</p>
        <div dangerouslySetInnerHTML={{ __html: method.body }} />
      </div>
    );
  }
}

export default Method;
