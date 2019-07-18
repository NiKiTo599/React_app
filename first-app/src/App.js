import React, { Component } from 'react';
import WeatherDisplay from './Weather/WeatherDisplay';
import ButtonsOfCities from './ButtonsOfCities';

const PLACES = [
  { "name": "Zhodino", "lat": 54.09, "lon": 28.33 },
  { "name": "Svetlogorsk", "lat": 61.11, "lon": 28.86 },
  { "name": "Minsk", "lat": 53.9, "lon": 27.56 },
  { "name": "Lahoysk", "lat": 54.2, "lon": 27.85 }
];

class App extends Component {
  state = {
    activePlace: 0,
  }; 

  render() {
    const { activePlace } = this.state;
    return (
      <>
        <div>
          <ButtonsOfCities places={PLACES} context={this}/>
          <WeatherDisplay key={activePlace} name={PLACES[activePlace].name} lat={PLACES[activePlace].lat} lon={PLACES[activePlace].lon} />
        </div>
      </>
    );
  }
}
export default App;