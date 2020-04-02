import React, { Fragment } from "react";
import img from '../hog-imgs/augustus_gloop.jpg'
class HogCard extends React.Component {

  handleClick = (event) => {
    this.props.clickCard(event)
  }

  render() {
    return (
      <div className="card" onClick={event => this.handleClick(event)}>
        <img src={img} />
        <span>Hello {this.props.info.name}</span>
      </div>
    );
  }
}

export default HogCard;
