
import AddButton from './AddButton'
import SummarySection from './SummarySection'
import Player from './Player'

import React, { Component } from 'react'

export default class PlayerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    addPlayer = () => {
        const playerId = this.state.players.length + 1;
        const newPlayer = { id: playerId, name: 'player', points: 0 }

        this.setState({ players: [...this.state.players, newPlayer] })
    }

    deleteAllPlayers = () => {

        this.setState({
            players: []
        })

    }
    deleteCurrent = (id) => {
        let filtered = [];
        filtered = this.state.players.filter((player) => player.id !== id);
        this.setState({
            players: filtered
        })
    }
    refreshScore = (id) => {
        let filtered = this.state.players.slice().map((player) => player.id === id ? { ...player, points: 0 } : player);
        this.setState({
            players: filtered
        })
    }
    incrementScore = (id) => {
        let filtered = this.state.players.slice().map((player) => player.id === id ? { ...player, points: player.points + 1 } : player);
        this.setState({
            players: filtered
        })
    }
    decrementScore = (id) => {
        let filtered = this.state.players.slice().map((player) => player.id === id ? { ...player, points: player.points === 0 ? player.points : player.points - 1 } : player);
        this.setState({
            players: filtered
        })
    }
    render() {
        return (
            <div>
                <div className='container player-list '>
                    {this.state.players.length !== 0 ?
                        (<SummarySection numberPlayers={this.state.players.length} deleteAll={this.deleteAllPlayers} />)
                        : null}

                    
                            {this.state.players.length === 0 ?
                                (<div ><p>No players on list!</p> <p>Click add player button to add players!</p> </div>)
                                : ( <div className="container">
                                <div className="row"> {this.state.players.map((player, index) =>
                                (

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                        <div className="players">
                                            <Player key={index} player={player}
                                                deleteCurrent={this.deleteCurrent}
                                                refreshScore={this.refreshScore}
                                                incrementScore={this.incrementScore}
                                                decrementScore={this.decrementScore} />
                                        </div></div>

                                ))} </div ></div>) }

                        
                    <AddButton addPlayer={this.addPlayer} />

                </div>
            </div>
        )
    }
}



