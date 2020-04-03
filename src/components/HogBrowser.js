import React, { Fragment } from "react";
import Hog from "./Hog"

class HogBrowser extends React.Component {
  
  render() {
    return (
      <div className="ui grid container">
       {this.props.hogs.map (hog => <Hog hog={hog} toggleInfo={this.props.toggleInfo} key={hog.name}/> )}     
      </div>
    )
  }
}

export default HogBrowser;
