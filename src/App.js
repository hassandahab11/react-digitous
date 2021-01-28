import React from "react";
import './App.css';
import './styles/global.css';
import Box from "./components/box";




  const tempMin = -20;
  const tempMax = 40;
  const heartMin  = 80;
  const heartMax = 180; 
  const stepsMin = 0;
  const stepsMax = 50000;

 
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     water: 0,
     heart: 0,
     temperature: -10,
     steps: 3000,
    };
  }

  onHeartChange = (value) => {
    this.setState({heart: this.state.heart + value});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>
            <h5 className="text-primary">Heart : {heartMin} </h5>
            <h5 className="text-primary">Temperature : {tempMin}</h5>
            <h5 className="text-primary">Steps : {stepsMin} </h5>
          </p>
            
            <Box icon ={"local_drink"}color={"#3a85ff" }value={1.5} unit={"L"} />
            <Box icon ={"wb_sunny"}color={"yellow"}value={-10} unit={"°C"} />
            <Box icon ={"favorite"}color={"red"}value={120} unit={"bpm"} />
            <Box icon ={"directions_walk"}color={"black"}value={3000} unit={"steps"} />
        </div>
      </div>
      
    );
  }
}

export default App;
