import React, {Component} from 'react'
import Weather from './components/Weather'
import City from './components/City'


class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: undefined,
      isLoading: false
    }
  }
  changeButtonStyle = (e) => { //change style on clicked button, and reset others
    const buttons = e.target.parentNode.childNodes
    for (let child of buttons) { //reset button styling
      child.style.background = 'white'
      child.style.color = '#3E82F7'
    }
    e.target.style.background='#3E82F7'//set styling for clicked button
    e.target.style.color='white'
  }

  getWeather = (e) => {
    this.changeButtonStyle(e)

    const city = e.target.textContent
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},ca&appid=e83886c8c652380bf830a0c8c53bd222&units=metric`
    this.setState({isLoading: true}) //set the state to loading
    setTimeout(() => { //timeout to see loading... gif, otherwise its too fast
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
        <City     getWeather={this.getWeather}
                  weatherData={this.state.weatherData}/>
        <Weather  weatherData={this.state.weatherData}
                  isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App
