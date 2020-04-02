import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <div>
        <Filter filterGreased = {props.filterGreased} changeFilter = {props.changeFilter} ></Filter>
        <Sort sortByWeight = {props.sortByWeight} changeSorting = {props.changeSorting}/>
      </div>
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      
    </div>
  );
};

const Sort = (props) => {
  if (props.sortByWeight){
    return (
      <div className="ui buttons">
        <button onClick = {props.changeSorting} className="ui positive button">Name</button>
          <div className="or"></div>
        <button className="ui disabled button">Weight</button>
      </div>
    )
  }
  else {
    return (
      <div className="ui buttons">
        <button className="ui disabled button">Name</button>
          <div className="or"></div>
        <button onClick = {props.changeSorting} className="ui positive button">Weight</button>
      </div>
    )
  }
}

const Filter = (props) => {
  if (props.filterGreased){
    return <button onClick = {props.changeFilter} className ="ui teal button">Show all</button>
  }
  else {
    return <button onClick = {props.changeFilter} className ="ui brown button">Show Greased</button>
  }
}

export default Nav;
