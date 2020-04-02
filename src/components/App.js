import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HotTile from "./HogTile"
import HogList from "./HogList"
class App extends Component {
  
  render() {
    return (
      
      <div className="App">
        
        <Nav />
        <HogList hogs={hogs}/>
      </div>
    );
  }
}

export default App;
