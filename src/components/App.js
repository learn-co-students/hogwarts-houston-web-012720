import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import Filter from './Filter.js'
import Sort from './Sort.js'
import HogBrowser from './HogBrowser.js'

class App extends Component {
  state = {
    hogs,
    greaseFilter: false,
    sort: 'default'
  }

  filterHogs = (hogs) => {
    return this.state.greaseFilter
    ? hogs.filter(hog => hog.greased === true)
    : hogs
  }

  showHogs = () => {
    let filteredHogs = this.filterHogs(this.state.hogs)
    let showHogs = []

    switch (this.state.sort) {
      case 'default':
        console.log('filtering by default')
        showHogs = filteredHogs
        break
      case 'name':
        console.log('filtering by name')
        showHogs = [...filteredHogs].sort((a,b) => (a.name > b.name) ? 1 : -1)
        // console.log(this.state.hogs)
        break
      case 'weight':
        console.log('filtering by weight')
        // showHogs = [...filteredHogs].sort((a,b) => (a.weight < b.weight) ? 1 : -1)
        showHogs = [...filteredHogs].sort((a,b) => b.weight - a.weight)
        break
      default:
        console.log('unknown filter???')
    }
    return showHogs
  }

  toggleFilter = () => {
    this.setState((prevState) => ({
      greaseFilter: !prevState.greaseFilter
    }),
    ()=>{console.log(`Grease filter: ${this.state.greaseFilter}`)}
    )
  }

  // filterHogs = () => {
  //   const greasedHogs = hogs.filter(hog => hog.greased === true);
  //   console.log(greasedHogs)
  //   this.state.greaseFilter
  //   ? this.setState({hogs: greasedHogs})
  //   : this.setState({hogs: hogs})
  // }

  sortHogs = (sortType) => {
    this.setState({
      sort: sortType
    }
    // ()=>{console.log(this.state.sort)}
    )
  }

  render() {
    // console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <Filter
          toggleFilter={this.toggleFilter} />
        <div style={{height: '30px'}}></div>
        <Sort
          sort={this.state.sort}
          sortHogs={this.sortHogs}/>
        {/* <HelloWorld /> */}
        <div style={{height: '30px'}}></div>
        <HogBrowser
          hogs={this.showHogs()}
          greaseFilter={this.state.greaseFilter} />
      </div>
    );
  }
}

export default App;
