
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [{
        id: 1,
        name: 'player',
        points: 0,

      },
      {
        id: 2,
        name: 'player',
        points: 15,

      },
      ]
    }
  }

  addPlayer = () => {
    const playerId = this.state.players.length + 1
    const newPlayer = {id:playerId, name:'player', points:Math.floor(Math.random() * (99 - 1 + 1)) + 1 }
    
    this.setState({players:[...this.state.players,newPlayer]})
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className=" container player-list-bg"><PlayerList players={this.state.players} addPlayer={this.addPlayer} /></div>
        
      </div>
    )
  }
}



