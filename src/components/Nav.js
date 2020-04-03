import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick= {(e)=>props.handlefilter(e)}>Filter Grease Hogs</button>
      <button onClick= {(e)=>props.handleSortname(e)}>Sort by name</button>
      <button onClick= {(e)=>props.handleSortweight(e)}>Sort by weight</button>


    </div>
  );
};

export default Nav;
