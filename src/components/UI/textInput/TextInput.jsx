import React, { useState } from "react";
import './TextInput.sass';



export const TextInput = props => {

    const {placeholder, ...params} = props

    // Стейт, который хранит то, что записано в инпуте
    const [val, setVal] = useState(params.value)

    const handleChange = (evt) => {
        setVal(evt.target.value)
        params.onChange(val)
    }

    return(
        <div>
        <input type="text" onChange={handleChange} className="searchBar" placeholder={placeholder} value={val}>
        </input>
        <button onClick={() => setVal('')}>Clear</button>
        </div>

    )
}