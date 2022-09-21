import React, { useState } from "react";
import './TextInput.sass';



export const TextInput = props => {

    const {placeholder, ...params} = props

    // Стейт, который хранит то, что записано в инпуте
    const [val, setVal] = useState(params.value)

    const handleChange = (value) => {
        console.log('handleChange')
        console.log(value)
        setVal(value)
        params.onChange(value)
    }

    return(
        <div>
        <input type="text" onChange={evt => handleChange(evt.target.value)} className="searchBar" placeholder={placeholder} value={val}>
        </input>
        <button onClick={() => handleChange('')}>Clear</button>
        </div>

    )
}