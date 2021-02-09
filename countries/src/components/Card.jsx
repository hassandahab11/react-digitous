import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          className="countryImage"
          src={this.props.flag}
          alt={`Drapeau de la ${this.props.name}`}
        />
        <p>Name: {this.props.name}</p>
        <p>Capital: {this.props.capital}</p>
        <p>Population: {this.props.population}</p>
        <p>Region: {this.props.region}</p>
      </div>
    );
  }
}

export default Card;