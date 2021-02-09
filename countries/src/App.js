import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      countries: []
    };

    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount() {
    this.getCountry("france");
  }

  getCountry(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((laReponseDeCountriesAPI) => {
        this.setState({
          countries: laReponseDeCountriesAPI
        });
      });
  }

  onCountryChange(event) {
    this.setState({
      searchName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.searchName} onChange={this.onCountryChange}></input>
        <button onClick={() => {this.getCountry(this.state.searchName)}}>Search</button>
        {this.state.countries.map((country) => {
          return <Card {...country} />
        })}
      </div>
    );
  }
}

export default App;