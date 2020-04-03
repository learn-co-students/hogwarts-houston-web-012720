import React from "react";
 import { Card , Image, Message} from 'semantic-ui-react'
 import HogInfo from './HogInfo'

class Hog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayInfo: false,
      displayHog: true 
    }
  }



  showinfo = (event) =>{
    this.setState({
      displayInfo: !this.state.displayInfo
    },()=> console.log(this.state))
  }

  hideme = () => {
    this.setState({
      displayHog: !this.state.displayHog
    })
  }


  card = () => (
    <Card>
    <Image src={this.props.hog.img} wrapped ui={false}/>
    <Card.Content>
    <Card.Header>{this.props.hog.name}</Card.Header>
    {this.state.displayInfo ? <HogInfo hog={this.props.hog} /> : ""}
    </Card.Content>
    <button class="ui primary button" onClick={this.showinfo}>See my Information</button>
    <button class="ui primary button" onClick={this.hideme}>Hide me</button>
    </Card>
  )

  render() {

    return this.state.displayHog? this.card(): <div></div> };
}

export default Hog;


// name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     weight: 2.0,
//     'highest medal achieved': 'bronze',
