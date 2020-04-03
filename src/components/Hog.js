import React , {Component} from 'react'

import augustus_gloop from "../hog-imgs/augustus_gloop.jpg"
import bay_of_pigs from "../hog-imgs/bay_of_pigs.jpg"
import cherub from "../hog-imgs/cherub.jpg"
import galaxy_note from "../hog-imgs/galaxy_note.jpg"
import leggo_my_eggo from "../hog-imgs/leggo_my_eggo.jpg"
import mudblood from "../hog-imgs/mudblood.jpg"
import piggy_smalls from "../hog-imgs/piggy_smalls.jpg"
import porkchop from "../hog-imgs/porkchop.jpg"
import the_prosciutto_concern from "../hog-imgs/the_prosciutto_concern.jpg"
import trouble from "../hog-imgs/trouble.jpg"
import truffleshuffle from "../hog-imgs/truffleshuffle.jpg"
import rainbowdash from "../hog-imgs/rainbowdash.jpg"
import sobriety from "../hog-imgs/sobriety.jpg"


export default class Hog extends Component {

    constructor() {
        super()
        this.state = {
            images: {
                "augustus_gloop": augustus_gloop,
                "bay_of_pigs": bay_of_pigs,
                "cherub": cherub,
                "galaxy_note": galaxy_note,
                "leggo_my_eggo": leggo_my_eggo,
                "mudblood": mudblood,
                "piggy_smalls": piggy_smalls,
                "porkchop": porkchop,
                "the_prosciutto_concern": the_prosciutto_concern,
                "trouble": trouble,
                "truffleshuffle": truffleshuffle,
                "rainbowdash": rainbowdash,
                "sobriety": sobriety
            },
            show: false,
            hide_hog: false,
            hide_status: "Hide Hog"
        }
    }
    

    selectImage = (name) => {
        let newName = name.toLowerCase().split(" ").join("_")
        
        return <img src={this.state.images[newName]} alt={`${newName} imag`} />
    }

    showInfo = (hog) => {
        if(this.state.show){
            return (
                <div>
                    <li>Specialty: {hog.specialty}</li>
                    <li>Weight: {hog.weight}</li>
                    <li>Highest Medal Achieved: {hog['highest medal achieved']}</li>
                </div>
            )
        }
    }

    showHog = (hog) => {
        if(!this.state.hide_hog){
            return(
                <div>   
                    {this.selectImage(hog.name)}
                    <h2>{hog.name}</h2>
                    <button className= "btn" onClick= {() => this.setState({show: !this.state.show})}>See more info</button>
                    {this.showInfo(hog)}
                </div>
            )
        }
    }

    hideHogs = () => {
        this.setState({
            hide_hog: !this.state.hide_hog,
            hide_status: !this.state.hide_hog ? "View Hog" : "Hide Hog"
        })
    }
 
    render(){
        let hog = this.props.hog
        return (
            <div className="content">
                {this.showHog(hog)}
                <button className="btn" onClick= {() => this.hideHogs()}>{this.state.hide_status}</button>
            </div>
        )
    }
}