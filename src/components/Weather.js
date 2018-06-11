import React, {Component} from 'react'
// import styled from 'styled-components'


class Weather extends Component {
  render() {
    if (this.props.isLoading) {
      return 'loading...'
    }
    return (
      <div className='Weather'>
        {this.props.weatherData.temp}
        {this.props.weatherData.temp_min}
        {this.props.weatherData.temp_max}
      </div>
    )
  }
}

export default Weather
