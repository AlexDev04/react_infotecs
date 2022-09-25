import React, { useEffect, useState } from "react"
import './TextArea.sass'
import { But } from "../but"



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
        <div className="textArea_outer">
        <textarea
            type="text"
            onChange={evt => handleChange(evt.target.value)}
            className="textArea" placeholder={placeholder}
            value={val}
        >
        </textarea>
        <But temp="default" onClick={() => handleChange('')}>Clear</But>
        </div>

    )
}