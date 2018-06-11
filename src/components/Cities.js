import React, {Component} from 'react'
// import styled from 'styled-components'


class Cities extends Component {
  render() {
    return (
      <div className='Cities'>
        <button onClick={this.props.getWeather}>Toronto</button>
        <button onClick={this.props.getWeather}>Montreal</button>
        <button onClick={this.props.getWeather}>Ottawa</button>
      </div>
    )
  }
}

export default Cities
