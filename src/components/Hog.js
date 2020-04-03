import React from 'react'
// import Augustus from '../hog-imgs/augustus_gloop.jpg'

export default class Hog extends React.Component {
  state = {
    seeInfo: false
  }

  snakeCase = (name) => {
    return name.toLowerCase().replace(/\s+/g,"_")
  }

  showInfo = () => {
    console.log(`Showing info for ${this.props.hog.name}.`)
    this.setState({
      seeInfo: true
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
      <div className='ui eight wide column'>
        <img src={require(`../hog-imgs/${this.snakeCase(hog.name)}.jpg`)} alt={hog.name} onClick={this.showInfo}/>
        <h1>{hog.name}</h1>
        {this.hogInfo(hog)}
      </div>
    )
  }
}