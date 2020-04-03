import React from 'react'
// import Augustus from '../hog-imgs/augustus_gloop.jpg'

export default class Hog extends React.Component {
  state = {
    seeInfo: false,
    showHog: true
  }

  snakeCase = (name) => {
    return name.toLowerCase().replace(/\s+/g,"_")
  }

  showInfo = () => { //acts screwy with filter AND sort
    console.log(`Showing info for ${this.props.hog.name}.`)
    this.setState({
      seeInfo: true
    })
  }

  hideHog = () => {
    console.log(`Hiding ${this.props.hog.name}.`)
    this.setState({
      showHog: false
    })
  }

  hogInfo = (hog) => {
    return (
      this.state.seeInfo
      ? <div className='hog-info'>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} lbs.</p>
          <p>{hog.greased ? "Greased" : "Ungreased"}</p>
          <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        </div>
      : <div className='hog-info'></div>
    )
  }

  render() {
    const hog = this.props.hog
    return (
      this.state.showHog
      ? <div className='ui card'>
          <img src={require(`../hog-imgs/${this.snakeCase(hog.name)}.jpg`)} alt={hog.name} onClick={this.showInfo}/>
          <h1>{hog.name}</h1>
          {this.hogInfo(hog)}
          <button onClick={this.hideHog}>Hide me!</button>
        </div>
      : <div className='ui' title='asdf'></div>
    )
  }
}