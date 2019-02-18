import React, { Component } from 'react'
import { Loop, Stage } from 'react-game-kit'
import './App.css'

class App extends Component {
  render() {
    return (
      <Loop>
        <Stage>// Game specific components go here</Stage>
      </Loop>
    )
  }
}

export default App
