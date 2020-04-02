import React from 'react'
import HogList from './HogList'

export default class HogTile extends React.Component{

    render(){
        return(
            <div>
               <h2> {this.props.hog.name}</h2>
               <h2>{this.props.hog.specialty}</h2>
               <h2>{this.props.hog.weight}</h2>
            </div>
        )
    }
}