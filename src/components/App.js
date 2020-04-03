import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBrowser from "./HogBrowser";
import ViewControls from "./ViewControls"

class App extends Component {

  constructor(){
    super() 
    // add a display key to hog object and sort alphabetically 
    let newHogs = hogs.map ( hog => { return ( {...hog, display: false} ) }) 
    newHogs = newHogs.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name))
    this.state = {
      hogs: newHogs, // this list will get filtered and fed to displayHogs
      displayHogs : newHogs // this list gets sorted and sent to children
    }
  }

  handleFilter = (e) => {
    let filteredHogs 
    switch(e.target.value){ 
      case ("Greased"):
        filteredHogs = hogs.filter( hog => hog.greased )
        break 
      case ("Ungreased"): 
        filteredHogs = hogs.filter( hog => !hog.greased )
        break 
      default: 
        filteredHogs = hogs
    }
    this.setState({
      displayHogs: filteredHogs
    })

  }

  handleSort = (e) => {
    let sortedHogs
    switch (e.target.value){
      case ("Name"): 
        sortedHogs = this.state.displayHogs.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name))
        // sortedHogs = hogs.sort( (hog1, hog2) => hog1.name > hog2.name ? 1 : -1 )
        break 
      case ("Weight"):
        sortedHogs = this.state.displayHogs.sort( (hog1, hog2) => hog1.weight > hog2.weight ? 1 : -1 )
        break
      default: 
        sortedHogs = hogs
    }
    this.setState({
      displayHogs: sortedHogs
    })
  }

  handleDetails = (e) => {
    let hogs = this.state.displayHogs
    let show
    switch (e.target.value){
      case ("Show"): 
        show = true
        break
      case ("Hide"): 
        show = false
    }
    this.setState({
      // set all hogs to either true or false 
      displayHogs: hogs.map( hog => { return ({...hog, display: show})})
    })
  }

  toggleHogInfo = (h) => {
    // debugger
    let toggledHogs = this.state.displayHogs.map ( hog => {
      if (hog === h){
        return {...hog, display: !hog.display}
      }
      return hog
    })
    this.setState({
      displayHogs: toggledHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <ViewControls filter={this.handleFilter} sort={this.handleSort} details={this.handleDetails}/>
        <HogBrowser hogs={this.state.displayHogs} toggleInfo={this.toggleHogInfo}/>
      </div>
    );
  }
}

export default App;
