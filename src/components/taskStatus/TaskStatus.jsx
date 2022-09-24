import React from "react";
import './TaskStatus.sass';


export const TaskStatus = props => {

    const {status, ...params} = props

    let col
    if(!status || status === 'Waiting') {
        col = 'gray';
    }
    if(status === 'In progress') {
        col = 'blue';
    }
    if(status === 'Done') {
        col = 'green';
    }


    return(
        <div className={`status_${col}`}>
            {status}
        </div>
    )
}