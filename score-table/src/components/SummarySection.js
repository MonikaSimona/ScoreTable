import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
 
export default function SummarySection({deleteAll , numberPlayers}) {
    return (
        <div className="summary">
        <div className='container p-0 mt-4  '>
            <div className="row  ">
                <div className="col d-flex justify-content-start ">Total players {numberPlayers}</div>
                <div className="col d-flex justify-content-end align-items-center  ">
                    <button className='delete-all-button ' onClick={deleteAll}> <RiDeleteBin6Line className='mb-1 mr-1'/> Delete All</button>
                </div>
            </div>
            
        </div>
        </div>
    )
}
