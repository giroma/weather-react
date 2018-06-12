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
  render() {
    return (
      <Buttons >
        <Button onClick={this.props.getWeather}>Toronto</Button>
        <Button onClick={this.props.getWeather}>Montreal</Button>
        <Button onClick={this.props.getWeather}>Ottawa</Button>
      </Buttons>
    )
  }
}

export default City
