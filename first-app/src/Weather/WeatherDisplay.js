import React, { Component } from 'react';
import Weather from '../data/Weather.json';
import DateOfWeather from './DateOfWeaher';

export default class WeatherDisplay extends Component {

  state = {
    weatherData: Weather,
  }

  /* componentDidMount = () => {
    const { lat, lon } = this.props;
    const URL = `http://api.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=1846e9028b0bb557574b5bf3261b0d72&units=imperial`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ weatherData: data })
      });
  } */

  fahrenheitToCelsius = (fahrenheit) => {
    return (((fahrenheit - 32) * 5) / 9).toFixed(0);
  }

  urlForIcon = (icon) => {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  render() {
    const { weatherData } = this.state;
    if (!weatherData) return <h1>Loading</h1>;
    const list = weatherData.list;
    console.log(list);
    return (
      <div>
        <h1>Weather in {this.props.name}</h1>
        {list.map((day, index) => (
          <div className='day'>
            <DateOfWeather day={day}/>
            <img src={this.urlForIcon(day.weather[0].icon)} alt={day.weather[0].description} />
            <p>Current: {this.fahrenheitToCelsius(day.main.temp)}°</p>
            <p>High: {this.fahrenheitToCelsius(day.main.temp_max)}°</p>
            <p>Low: {this.fahrenheitToCelsius(day.main.temp_min)}°</p>
            <p>Wind Speed: {day.wind.speed} mi/hr</p>
          </div>
        ))}
      </div>
    )
  }
}