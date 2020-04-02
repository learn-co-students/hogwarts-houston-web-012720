import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBrowser from "./HogBrowser";

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      sortByWeight: false,
      filterGreased: false
    }
  }

  changeSorting = () => {this.setState({sortByWeight: !this.state.sortByWeight})}
  changeFilter = () => {this.setState({filterGreased: !this.state.filterGreased})}

  sortedHogs = () => {
    let myHogs = this.state.hogs
    if (!this.state.sortByWeight){
      myHogs = hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
    }
    else{
      myHogs = hogs.sort((a,b) => b.weight - a.weight)
    }
    if (this.state.filterGreased){
      myHogs = hogs.filter(hog => hog.greased)
    }
    return myHogs
  }

  render() {
    return (
      <div className="App">
        <Nav sortByWeight={this.state.sortByWeight} filterGreased ={this.state.filterGreased} changeSorting = {this.changeSorting} changeFilter = {this.changeFilter} />
        <HogBrowser hogs={this.sortedHogs()}/>
      </div>
    );
  }
}

export default App;
