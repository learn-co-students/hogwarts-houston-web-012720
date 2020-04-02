import React, { Fragment } from "react";
import HogCard from './HogCard.js'

class HogCardContainer extends React.Component {

  infoHog = (event) => {
    console.log(event.target)
  }

  hideHog = (event) => {
    console.log(event.target)
  }

  render() {
    return (
      <div className="ui link cards">
        {this.props.hogs.map(hog => <HogCard info={hog} hidePress={this.hideHog} infoPress={this.infoHog}/>)}
      </div>
    );
  }
}

export default HogCardContainer;
