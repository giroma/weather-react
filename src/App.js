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
      weatherData: undefined,
      isLoading: false
    }
  }

  getWeather = (e) => {
    const city = e.target.textContent
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},ca&appid=e83886c8c652380bf830a0c8c53bd222&units=metric`
    this.setState({isLoading: true}) //set the state to loading
    setTimeout(() => { //timeout to see if loading... is working
      fetch(url).then(response => {
        if (!response.ok) {
          return console.log('api error:',response.statusText);
        }
        response.json().then(data => {
          this.setState({weatherData: {name:data.name, main:data.main}, isLoading: false}) //set state of weatherData and revert isLoading back to false
        })
      })
    },500)
  }

  render() {
    return (
      <div className='App'>
        <Cities getWeather={this.getWeather}/>
        <Weather  weatherData={this.state.weatherData}
                  isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App
