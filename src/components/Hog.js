import React, { Fragment } from "react";

class Hog extends React.Component {
  
  getFile (hog) { 
    return hog.name.toLowerCase().replace(/\s+/g,"_")
  }

  showHogInfo = (hog) => {
    return (
      <div> 
        <p> {hog.greased ? "Greased" : "Not greased"}</p>
        <p> Weight: {hog.weight}</p>
        <p> Specialty: {hog.specialty} </p>
        <p> Highest Medal: {hog["highest medal achieved"]}</p>
      </div>
    )
  }


  render() {
    console.log("Hog", this.props)
    let hog = this.props.hog
    return (
      <div className="ui four wide column">
        <h2>{hog.name}</h2>
        {/* if you put just the file path it looks for that path on the server */}
        {/* the require will have it look in the image package made by webpacker */}
        <img 
          src={require(`../hog-imgs/${this.getFile(hog)}.jpg`)} 
          alt="sucks to suck" 
          onClick={ () => this.props.toggleInfo(hog) } />
        {
          (hog.display)
          ? this.showHogInfo(hog)
          : null
        }
      </div>
    )
  }
}

export default Hog;
