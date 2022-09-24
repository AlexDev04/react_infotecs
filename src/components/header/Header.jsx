import React from 'react'
import './Header.sass'
import logo from '../../images/logo.svg';

export const Header = () => {

    return(
        <header className="header">
            <img className="header_image" src={logo}></img>
            <h1 className="header_text">ToDo Application</h1>
        </header>
    )
}