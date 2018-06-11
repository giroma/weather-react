import React, {Component} from 'react'
// import styled from 'styled-components'


class Weather extends Component {
  render() {
    return (
      <div className='Weather'>
        {this.props.weatherData.temp_min}
      </div>
    )
  }
}

export default Weather
