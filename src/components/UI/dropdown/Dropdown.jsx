import React, { useEffect, useState } from "react";
import './Dropdown.sass';
import '../../../styles/index.scss'
import closedDropdown from '../../../images/closedDropdown.svg';
import openedDropdown from '../../../images/openedDropdown.svg';


export const Dropdown = props => {

    const {placeholder, dis, className, val, updateData, list, ...params} = props

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(val);
    }, [val])

    let img;
    switch (opened) {
        case false:
            img = closedDropdown;
            break;
        case true:
            img = openedDropdown;
            break;
    }

    const handleOpen = () => {
        if(!dis)setOpened(!opened)
    }

    const handleChange = (evt) => {
        if(!dis) setSelected(evt.target.innerHTML)
        console.log(evt.target.innerHTML)
        console.log(selected)
        updateData(evt.target.innerHTML)
    }
    console.log(selected)

    return(
        <div className={`dropdown-outer ${className}`}>
            <div className={`${opened && 'dropdown'} ${dis && 'dropdown-dis'}`} onClick={handleOpen}>
                <div className={`${!dis && 'dropdown-label'} ${opened && 'dropdown-label-active'} ${selected != undefined && 'dropdown-label-active'}`}>
                    <p>{selected || placeholder}</p>
                    {!dis && <img src={img} />}
                </div>
                <div className={`dropdown-content ${!opened && 'hidden'}`} onClick={handleChange}>
                    {list.map(el => <div onClick={handleChange} className="dropdown-content-el" key={el}>{el}</div>)}
                </div>
            </div>
        </div>
    )
}