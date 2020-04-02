import React from 'react'


export default class Hog extends React.Component {


  constructor() {
    super()
    this.state = {
      showDetails: false,
      showHog: true
    }
  }


  extraContent = () => {
    if (this.state.showDetails){
      return (
        <div className="content">
            
            <div className="meta">
              <span className="date">{this.props.hog.speciality}</span>
            </div>
            <div className="description">
              Highest medal achieved: {this.props.hog['highest medal achieved']}
            </div>
            <div className="extra content">
              Weight: {this.props.hog.weight}
            </div>
        </div>

      )
    }
    else{
      return(
        <div></div>
      )
    }
  }

  changeState = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  dissapear = () => {
    this.setState({showHog: false})
  }

  render(){
    if (this.state.showHog){
      let ss = this.props.hog.name.toLowerCase().replace(/\s+/g,"_")
      return(
        <div className="ui eight wide column card">
          <div className="content">
            <a className="header">{this.props.hog.name}</a>
          </div>
          <div onClick= {this.changeState} onDoubleClick = {this.dissapear} className="image">
            <img src={require(`../hog-imgs/${ss}.jpg`)} alt = {`${this.props.hog.name} portrait`}/>
          </div>
          {this.extraContent()}
        </div>
      )
    }
    else{
      return <div></div>
    }
  }

}