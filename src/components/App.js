import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter"

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs,
      filter_hogs: hogs,
      title: "All Hogs"
    }
  }

  filter_hogs = (filter_value,sort_value) => {
    let hogs_data = [...this.state.hogs]
    if(sort_value === "name"){
      hogs_data = hogs_data.sort((a,b) => a.name.localeCompare( b.name))
    }
    if(sort_value === "weight"){
      hogs_data = hogs_data.sort((a,b) => a.weight - b.weight)
    }
    if (sort_value === ""){
      hogs_data = [...this.state.hogs]
    }

    if(filter_value === "greased"){
      this.setState({filter_hogs: hogs_data.filter(hog => hog.greased),title: "Greased Hogs"})
    }else{
      this.setState({filter_hogs: hogs_data,title: "All Hogs"})
    }
  }
  

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filter_hogs = {this.filter_hogs}/>
        <HogsContainer hogs = {this.state.filter_hogs} title={this.state.title}/> 
      </div>
    );
  }
}

export default App;
