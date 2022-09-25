import React, { useEffect, useState } from "react"
import './TextInput.sass'
import { But } from "../but"



export const TextInput = props => {

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
        <div className="textInput_outer">
            <input
                type="text"
                onChange={evt => handleChange(evt.target.value)}
                className="textInput"
                placeholder={placeholder}
                value={val}
            >
            </input>
            <But temp="default" onClick={() => handleChange('')}>Clear</But>
        </div>

    )
}