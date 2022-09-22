import React, { useEffect, useState } from "react";
import './TextArea.sass';



export const TextArea = props => {

    const {placeholder, ...params} = props

    // Стейт, который хранит то, что записано в инпуте
    const [val, setVal] = useState(params.value)

    useEffect(() => {
        setVal(params.value)
    })

    const handleChange = (value) => {
        console.log('handleChange')
        console.log(value)
        setVal(value)
        params.onChange(value)
    }

    return(
        <div>
        <textarea
            type="text"
            onChange={evt => handleChange(evt.target.value)}
            className="searchBar" placeholder={placeholder}
            value={val}
        >
        </textarea>
        <button onClick={() => handleChange('')}>Clear</button>
        </div>

    )
}