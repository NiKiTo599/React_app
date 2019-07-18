import React, { Component } from 'react';

export default class DateOfWeather extends Component {

  divideDataAndTime = (string) => {
    return [
      string.slice(0, 10),
      string.slice(11)
    ];
  }

  render() {
    const { day } = this.props;
    const data = this.divideDataAndTime(day.dt_txt);
    return (
      <div>
        <h3>{data[0]}</h3>
        <h4>{data[1]}</h4>
      </div>
    );
  }
}