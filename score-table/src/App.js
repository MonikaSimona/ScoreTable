
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  

  

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className=" container player-list-bg"><PlayerList /></div>
        
      </div>
    )
  }
}



