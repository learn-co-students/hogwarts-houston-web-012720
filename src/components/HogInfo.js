import React from "react";
 import { Card , Image, Button} from 'semantic-ui-react'


class HogInfo extends React.Component {
  render() {
    return (
      <Card.Meta>
      <span className='date'>{`Name:${this.props.hog.name}`}</span> 
      <span className='date'>{`Specialty:${this.props.hog.specialty}`}</span>
      <span className='date'>{`Greased?${this.props.hog.greased}`}</span>
      <span className='date'>{`Weight${this.props.hog.weight}`}</span>
      <span className='date'>{`Highest medal achieved ${this.props.hog["highest medal achieved"]}`}</span>
      </Card.Meta>
    
    );
  }
}

export default HogInfo;
