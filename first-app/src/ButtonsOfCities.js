import React, { Component } from 'react';

export default class ButtonsOfCities extends Component {
  render() {
    const { places, context } = this.props;
    return <div>
      {places.map((place, index) => (
            <button
              key={index}
              onClick={() => context.setState({activePlace: index})}
            >
              {place.name}
            </button>
          ))}
    </div>;
  }
}