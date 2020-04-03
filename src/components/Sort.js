import React from 'react'

export default class Sort extends React.Component {
  render() {
    return (
      <div>
        <h3>Sort Hogs</h3>
        <div className='sort'>
          <select name='sortType' id='sortType' onChange={(e) => this.props.sortHogs(e.target.value)}>
            <option value='default'>Default</option>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
          </select>
        </div>
      </div>
    )
  }
}