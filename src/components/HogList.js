import React from 'react' 
import HogTile from './HogTile'

export default class HogList extends React.Component{
  
    render(){
        return(
            <div>
                {console.log(this.props.hogs)}
                {this.props.hogs.map(hog=> <HogTile hog={hog}/>)}
            </div>
        )
    }
}