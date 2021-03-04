import React from 'react'

export default function AddButton({addPlayer}) {
    return (
        <div>
            <button className='add-player-button' onClick={addPlayer}>+ Add player</button>
        </div>
    )
}
