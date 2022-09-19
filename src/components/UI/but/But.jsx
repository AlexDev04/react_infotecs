import React from "react";
import './But.sass';



export const But = ({props, children, temp, onClick}) => {
    return(
        <button{...props} className={'but-' + temp} onClick={onClick}>{children}</button>
    )
}