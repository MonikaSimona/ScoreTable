import React from 'react'
import PlayerPhoto from './svg/PlayerPhoto'
import { RiDeleteBin6Line } from 'react-icons/ri'
import RefreshButton from './svg/RefreshButton'


export default function Player({ player }) {
    return (
        <div className='player-card'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="player-photo">
                            <PlayerPhoto />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col d-flex justify-content-end red-delete mb-3"><span ><RiDeleteBin6Line className='mb-1' /> Delete</span></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">

                                        <input
                                            type="text"
                                            name='player'
                                            id='player'
                                            placeholder={`Player # ${player.id}`}
                                            className='player-name' />
                                        <div className="player-name-line"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className='score-number p-0'>{player.points}</span>
                                        <div className=''>
                                            <span className="refresh-button mr-2"><RefreshButton /></span>
                                            <span className="refresh p-0">
                                                Refresh</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col"> 
                                            <button className='card-button inc'> <span className='sign '>+</span>  Increment</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="card-button dec"> <span className='sign' >-</span> Decrement</button>
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


