import React, {Component} from 'react'
import styled from 'styled-components'
import loading from './../loading.gif'

const Temp = styled.div`
  display: flex;
  justify-content: center;
`
class Weather extends Component {
  temperatureDisplay = () => {
    if (this.props.weatherData) {//if weatherData has data in it, show it, otherwise show null
      return (
        <Temp>
          <div>
            <h3>Today's Weather in {this.props.weatherData.name}</h3>
            <p>Current Temp: {this.props.weatherData.main.temp}C <br/>
            Min Temp: {this.props.weatherData.main.temp_min}C <br/>
            Max Temp: {this.props.weatherData.main.temp_max}C</p>
          </div>
        </Temp>
      )
    } else {return null} //if there is no weather data, return null (react requirement)
  }

  render() {
    if (this.props.isLoading) { //show loading... if the state of isLoading is true
      return <Temp><img src={loading} style={{height: '100px'}} alt=''></img></Temp>
    }
    return this.temperatureDisplay()

  }
}

export default Weather
