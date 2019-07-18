import React, { Component } from 'react';
import Weather from '../data/Weather.json';
import DateOfWeather from './DateOfWeaher';
import Slider from 'react-slick';

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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const { weatherData } = this.state;
    if (!weatherData) return <h1>Loading</h1>;
    const list = weatherData.list;
    console.log(list);
    return (
      <div className='container-main'>
        <h1 className='container-main__title'>Weather in {this.props.name}</h1>
        <Slider {...settings} className='container-main__slider'>
          {list.map((day) => (
            <div className='container-weather'>
              <DateOfWeather day={day} />
              <img className='container-weather__icon' src={this.urlForIcon(day.weather[0].icon)} alt={day.weather[0].description} />
              <p className='container-weather__item-info'>Temperature: {this.fahrenheitToCelsius(day.main.temp)}°</p>
              <p className='container-weather__item-info'>Pressure: {(day.main.pressure / 10).toFixed(3)} kPa</p>
              <p className='container-weather__item-info'>Cloudly: {day.clouds.all}%</p>
              <p className='container-weather__item-info'>Humidity: {day.main.humidity}%</p>
              <p className='container-weather__item-info'>Wind speed: {day.wind.speed} m/s</p>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}