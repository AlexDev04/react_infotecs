import React from "react";
import './SearchBar.sass';



export const SearchBar = ({placeholder}) => {
    return(
        <input type="text" className="searchBar" placeholder={placeholder}>
        </input>
    )
}