import React, {Component} from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  cursor: pointer;
  font-family: sans-serif;
  color: #3E82F7;
  font-size: 15px;
  background: white;
  width: 100px;
  margin: 10px 5px;
  padding: 10px 0px;
  border-radius: 5px;
  border-color: #3E82F7;
  &:focus {
    outline: 0;
  }
`
class City extends Component {
  createButton = () => {
    const cities = ['Toronto','Montreal','Ottawa']
    let allCities = []
    for (let city of cities) {
      allCities.push(<Button className={(this.props.weatherData && this.props.weatherData.name == city) ? 'pressed': ''} onClick={this.props.getWeather}>{city}</Button>)
    }
    return allCities
  }
  render() {
    return (
      <Buttons >
        {this.createButton()}
      </Buttons>
    )
  }
}

export default City
