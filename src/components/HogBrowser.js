import React from 'react'
import Hog from './Hog'

export default class HogBrowser extends React.Component {

  hogs = () => this.props.hogs.map(hog => <Hog hog = {hog} key = {hog.name}/>)
  

  render() {
    return(
      <div className = "ui grid container">
        {this.hogs()}
      </div>
    )
  }
}