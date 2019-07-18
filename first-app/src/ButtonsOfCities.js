import React, { Component } from 'react';

export default class ButtonsOfCities extends Component {
  render() {
    const { places, context } = this.props;
    return <div className='menu-cities'>
      {places.map((place, index) => (
        <button
          className='menu-cities__button'
          key={index}
          onClick={() => context.setState({ activePlace: index })}
        >
          {place.name}
        </button>
      ))}
    </div>;
  }
}