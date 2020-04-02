import React, { Fragment } from "react";

class HogCard extends React.Component {

  getImage = (hogName) => {
    let formattedName = hogName.split(" ").join("_").toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  }

  handleInfoPress = (event) => {
    this.props.infoPress(event)
  }

  handleHidePress = (event) => {
    this.props.hidePress(event)
  }

  render() {
    return (
      <div className="card">
        <img src={this.getImage(this.props.info.name)} />
        <h4>{this.props.info.name}</h4>
        <span>Specialty: {this.props.info.specialty}</span>
        <button className="ui button" onClick={this.handleInfoPress}>More Info</button>
        <button className="ui button" onClick={this.handleHidePress}>Hide Me</button>
      </div>
    );
  }
}

export default HogCard;
