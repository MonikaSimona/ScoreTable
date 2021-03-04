import React from 'react'
import AddButton from './AddButton'
import SummarySection from './SummarySection'
import Player from './Player'

export default function PlayerList({players, addPlayer}) {
    return (
        
        <div className='container player-list '>
            {console.log(players)}
            <SummarySection/>
            {players.length === 0 ? ( <div><p>No players on list!</p> <p>Click add player button to add players</p> </div> ) : players.map((player,index) => (
                <Player key={index} player={player}/>
            )) }
            
            
            <AddButton addPlayer={addPlayer}/>
            
        </div>
    )
}
