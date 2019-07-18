import React, { Component } from 'react';

export default class DateOfWeather extends Component {

  divideDataAndTime = (string) => {
    return [
      string.slice(0, 10),
      string.slice(11, 13)
    ];
  }

  render() {
    const { day } = this.props;
    const data = this.divideDataAndTime(day.dt_txt);
    return (
      <div className='container-date'>
        <h3 className='container-date__date'>{data[0]}</h3>
        <h4 className='container-date__time'>{data[1]}h</h4>
      </div>
    );
  }
}