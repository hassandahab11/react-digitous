import React from "react";

class Box extends React.Component {

  render() {
    if (this.props.icon === "local_drink") {
      return (
        <div className="box col-sm-3 col-6">
          <span
            className="material-icons"
            style={{ color: this.props.color, fontSize: 100 }}>{this.props.icon} </span>
          <span>{this.props.value}{this.props.unit}</span>
        </div>
        );
        
  } else {
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}>{this.props.icon} </span>
        <span>{this.props.value}{this.props.unit}</span>
        <input type="range" min="" max="" value="" onInput=""></input>
      </div>
    );
    }
  }    
  
}

export default Box;
