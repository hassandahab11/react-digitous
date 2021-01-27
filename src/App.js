import React from "react";
import './App.css';
import './styles/global.css';
import Box from "./components/box";
import './components/box';




  const tempMin = -20;
  const tempMax = 40;
  const heartMin  = 80;
  const heartMax = 180; 
  const stepsMin = 0;
  const stepsMax = 50000;

 
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>
            <h1 className="text-primary">Heart : {heartMin} </h1>
            <h1 className="text-primary">Temperature : {tempMin}</h1>
            <h1 className="text-primary">Steps : {stepsMin} </h1>
          </p>
        </div>
        <div className="row">
          <Box icon ={"directions_walk"}color={"black"}value={3000} unit={"steps"} />
          <Box icon ={"favorite"}color={"red"}value={120} unit={"bpm"} />
          <Box icon ={"wb_sunny"}color={"yellow"}value={-10} unit={"°C"} />
          <Box icon ={"local_drink"}color={"#3a85ff" }value={1.5} unit={"L"} />
          
        </div>
      </div>
      
    );
  }
}

export default App;
