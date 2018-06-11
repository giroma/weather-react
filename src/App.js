import React, {Component} from 'react'
import styled from 'styled-components'
import Weather from './components/Weather'
import Cities from './components/Cities'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: ''
    }
  }

  getWeather = (e) => {
    const city = e.target.textContent
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},ca&appid=e83886c8c652380bf830a0c8c53bd222&units=metric`
    fetch(url).then(response => {
      if (!response.ok) {
        return console.log('fetch error:',response.statusText);
      }
      response.json().then(data => {
        this.setState({weatherData: data.main})
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <Cities getWeather={this.getWeather}/>
        <Weather weatherData={this.state.weatherData}/>
      </div>
    )
  }
}

export default App
