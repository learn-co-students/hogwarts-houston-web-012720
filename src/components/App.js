import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogCardContainer from "./HogCardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogCardContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
