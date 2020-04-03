import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import DisplayHog from "./DisplayHog";

class App extends Component {
  constructor(){
    super()
    this.state ={
      hogs: hogs,
      filter: false,
      sortname: false,
      sortweight:false
    }
  }

  handlefilter = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  handleSortname = () => {

    let sortedname = this.state.hogs.sort((a,b) => a.name > b.name ? 1 : -1)
   
    this.setState ({
      sortname: true,
      hogs: sortedname
    })
  }

  handleSortweight = () => {
    let sortedwi = this.state.hogs.sort((a,b) => a.weight > b.weight ? 1 : -1)
   
    this.setState ({
      sortweight: true,
      hogs: sortedwi
    })
  } 


  render() {
    return (
      <div className="App">
        <Nav handlefilter={this.handlefilter}  handleSortname={this.handleSortname} handleSortweight={this.handleSortweight}/>
        <DisplayHog hogs={this.state.hogs} filter ={this.state.filter}/>
      </div>
    );
  }
}

export default App;
