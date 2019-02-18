import React, { Component } from 'react'
import logo from './logo.svg'
import { Loop, Stage } from 'react-game-kit'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Loop>
          <Stage>
            <World>
              <TileMap
                style={{ top: Math.floor(-63 * this.context.scale) }}
                src='assets/buildings.png'
                rows={1}
                columns={6}
                tileSize={512}
                layers={[[1, 2, 3, 4, 5, 6]]}
              />
            </World>
          </Stage>
        </Loop>
      </div>
    )
  }
}

export default App
