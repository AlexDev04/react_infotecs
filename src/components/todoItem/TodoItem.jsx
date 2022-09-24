import React from "react";
import './TodoItem.sass';
import { But, TaskStatus } from '../../components'



export const TodoItem = props => {

    const { title, status, taskId, opened, setOpenedTask, ...params } = props

    const isActive = opened? 'active': ''

    return(
        <div className={"todoItem " + isActive}>
            <h3 className="todoItem_title">{title}</h3>
            <TaskStatus status={status} />
            <div className="todoItem_control">
                <But temp="default" onClick={() => setOpenedTask(taskId)}>Edit</But>
            </div>
        </div>
    )
}