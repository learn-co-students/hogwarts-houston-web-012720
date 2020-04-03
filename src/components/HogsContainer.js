import React, { Component } from "react";
import Hog from './Hog'

class HogsContainer extends Component {

  displayData = () => {
    return this.props.hogs.map(hog => <Hog hog={hog} key = {hog.name}/>)
  }

  render() {
    return (
      <div className="main_content">
        <h1>{this.props.title}</h1>
        {this.displayData()}
      </div>
    );
  }
}

export default HogsContainer;
