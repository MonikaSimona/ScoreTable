import React, { useState } from 'react'
import PlayerPhoto from './svg/PlayerPhoto'
import { RiDeleteBin6Line } from 'react-icons/ri'
import RefreshButton from './svg/RefreshButton'


export default function Player({ player, refreshScore, incrementScore, decrementScore, deleteCurrent }) {

    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    console.log(input)
    return (
        <div className='player-card'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4  col-md-4 col-sm-4 col-12 d-flex justify-content-center justify-content-lg-start justify-content-md-start justify-content-sm-start  ">
                        <div className="player-photo">
                            <PlayerPhoto />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12  ">
                        <div className="row">
                            <div className="col d-flex justify-content-lg-end  justify-content-md-end justify-content-sm-end justify-content-center red-delete mb-lg-3 mt-2 " onClick={() => deleteCurrent(player.id)}><span ><RiDeleteBin6Line className='mb-1' /> Delete</span></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-12 mt-3 p-0">

                                        <input
                                            type="text"
                                            name='player'
                                            id='player'
                                            placeholder={`Player #${player.id}`}
                                            className='player-name'
                                            value={input}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex  flex-column  align-items-center align-items-lg-start align-items-md-start align-items-sm-start   mb-3">
                                        <span className='score-number p-0'>{player.points}</span>
                                        <div className='refr' onClick={() => refreshScore(player.id)}>

                                            <span className="refresh-button mr-3 "><RefreshButton /></span>
                                            <span className="refresh p-0">
                                                Refresh</span>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                                        <div className="row">
                                            <div className="col">
                                                <button className='card-button inc' onClick={() => incrementScore(player.id)}> <span className='sign '>+</span>  Increment</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="card-button dec" onClick={() => decrementScore(player.id)}> <span className='sign' >-</span> Decrement</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


