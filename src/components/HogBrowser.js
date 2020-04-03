import React from 'react'
import Hog from './Hog.js'

export default class HogBrowser extends React.Component {
  render() {
    // console.log(this.props.hogs)
    // const hogs = this.props.hogs
    // const greasedHogs = hogs.filter(hog => hog.greased === true);
    return (
      // this.props.greaseFilter
      // ? <div className='ui grid container'>
      //     {greasedHogs.map(hog => <Hog hog={hog} />)}
      //   </div>
      // : <div className='ui grid container'>
      //     {hogs.map(hog => <Hog hog={hog} />)}
      //   </div>
      <div className='ui cards'>
        {this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)}
      </div>
    )
  }
}