import React, { Fragment } from "react";
import Hog from "./Hog"
import {Card, Button} from 'semantic-ui-react'

class DisplayHog extends React.Component {


  render() {
    return (
     
      <div>
        <Card.Group>
        {this.props.hogs.map(hog => !(this.props.filter)|| hog.greased ? <Hog hog={hog} /> : <div></div>)}
        </Card.Group>
      </div>
    );
  }
}

export default DisplayHog;
