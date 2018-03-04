import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./Main.css";

import Home from "./Home";
import Method from "./Method";
import NoMatch from "./NoMatch";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/m/:method" component={Method} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Main;
