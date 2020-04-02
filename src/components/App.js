import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogCardContainer from "./HogCardContainer";
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <HogCardContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
