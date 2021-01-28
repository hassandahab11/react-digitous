
import React from "react";
import './App.css';

export class App extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
      cont: 0 }
      
      }
  render() {
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-4 offset-5">
        <h1 className="text-primary">Counter</h1>
        <h1 className="text-primary">Valeur de count est : </h1>
        <button style={{backgroundColor:"red", width:50, height:50, borderRadius:50, margin:10}} onClick={() => {this.setState({newCount: this.decrementCount - 1});}}>-</button>
        <button style={{backgroundColor:"green" , width:50, height:50, borderRadius:50, margin:10}}  onClick={() => {this.setState({newCount: this.incrementCount + 1});}}>+</button>
        </div>
        </div>

      </div>
    );
  }
}

export default App;

