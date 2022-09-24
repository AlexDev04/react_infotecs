import React from 'react'
import './Header.sass'
import logo from '../../images/logo.svg';

export const Header = props => {

    return(
        <header className="header">
            <img onClick={props.home} className="header_image" src={logo}></img>
            <h1 onClick={props.home} className="header_text">ToDo Application</h1>
        </header>
    )
}