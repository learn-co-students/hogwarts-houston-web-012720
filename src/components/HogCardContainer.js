import React, { Fragment } from "react";
import HogCard from './HogCard.js'
import images from '../hog-imgs/images.js'

class HogCardContainer extends React.Component {

  onClickCard = (event) => {
    // Show card info panel
  }

  render() {
    return (
      <div className="ui link cards">
        {this.props.hogs.map(hog => <HogCard info={hog} image={images[0]} clickCard={event => this.onClickCard(event)}/>)}
      </div>
    );
  }
}

export default HogCardContainer;
