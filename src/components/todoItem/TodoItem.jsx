import React from "react";
import './TodoItem.sass';
import { But } from '../../components'



export const TodoItem = ({ title, status, taskId, opened, setOpenedTask }) => {

    const isActive = opened? 'active': ''

    return(
        <div className={"todoItem " + isActive}>
            <h3>{title}</h3>
            <p>{status}</p>
            <div className="todoItem_control">
                <But temp="default" onClick={() => setOpenedTask(taskId)}>Редактировать</But>
            </div>
        </div>
    )
}