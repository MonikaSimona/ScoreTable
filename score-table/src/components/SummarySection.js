import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
 
export default function SummarySection({deleteAll , numberPlayers}) {
    return (
        <div className="summary">
        <div className='container p-0 mt-4  '>
            <div className="row  ">
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start align-items-lg-center align-items-md-center align-items-sm-center justify-content-center ">Total players: {numberPlayers}</div>
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end align-items-lg-center align-items-md-center align-items-sm-center justify-content-center my-2 ">
                    <button className='delete-all-button ' onClick={deleteAll}> <RiDeleteBin6Line className='mb-1 mr-1'/> Delete All</button>
                </div>
            </div>
            
        </div>
        </div>
    )
}
