import React from 'react'

export default class Filter extends React.Component {
  render() {
    return (
      <div>
        <h3>Grease Filter</h3>
        <button className='on/off' onClick={this.props.toggleFilter}>ON/OFF</button>
      </div>
    )
  }
}