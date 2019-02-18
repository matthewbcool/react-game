import React, { Component } from 'react'
import { Loop, World, Stage, Body, Sprite } from 'react-game-kit'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Loop>
          <Stage>
            <World>
              <Body args={[0, 0, 75, 75]} ref={b => (this.body = b.body)}>
                <Sprite
                  repeat={true}
                  src='assets/character-movement.png'
                  scale={this.context.scale * 2}
                  state={0}
                  steps={[9, 9, 0, 4, 5]}
                />
              </Body>
            </World>
          </Stage>
        </Loop>
      </div>
    )
  }
}

export default App
