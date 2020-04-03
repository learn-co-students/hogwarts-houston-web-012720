import React from "react";

export default class  ViewVontol extends React.Component {

  render () {
    return (
      <div className="navWrapper"> 

        <label> Wrestle: </label>
        <select onChange={this.props.filter}> 
          <option>All</option>
          <option>Greased</option>
          <option>Ungreased</option>
        </select>

        <label> Sort by: </label>
        <select onChange={this.props.sort}> 
          <option>Name</option>
          <option>Weight</option>
        </select>

        <label> Details: </label>
        <select onChange={this.props.details}> 
          <option>Hide</option>
          <option>Show</option>
        </select>
      </div>
    )
  }
}

