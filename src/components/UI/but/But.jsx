import React from "react";
import './But.sass';



export const But = props => {

    const {onClick, ...params} = props

    return(
        <button className={'but_' + params.temp} onClick={onClick}>{params.children}</button>
    )
}