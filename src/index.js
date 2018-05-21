import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return <h1>Alo</h1>;
  }
}

render(<App />, document.getElementById("app"));
