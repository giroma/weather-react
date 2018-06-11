import React, {Component} from 'react'
// import styled from 'styled-components'


class Weather extends Component {
  render() {
    if (this.props.isLoading) { //show loading... if the state of isLoading is true
      return 'loading...'
    }
    if (this.props.weatherData) {//if weatherData has data in it, show it, otherwise show null
      return (
        <div className='Weather'>
          <h3>Today's Weather in {this.props.weatherData.name}</h3>
          {this.props.weatherData.main.temp}
          {this.props.weatherData.main.temp_min}
          {this.props.weatherData.main.temp_max}
        </div>
      )
    } else {return null} //if there is no weather data, return null (react requirement)
  }
}

export default Weather
