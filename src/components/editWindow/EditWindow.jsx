import React from "react";
import './EditWindow.sass';



export const EditWindow = ({props, children, className, taskId, todos}) => {

    let operation
    if(taskId == todos.length) {
        operation = 'Add task'
    }
    else operation = `Edit task ${taskId}`

    const getTitle = () => {
        return operation.startsWith('Edit') && todos.find(todo => todo.id == taskId).title
    }

    const getDescription = () => {
        return operation.startsWith('Edit') && todos.find(todo => todo.id == taskId).description
    }

    return(
        <section className={"editWindow " + className}>
            <h2>{operation}</h2>
            <h3>{getTitle()}</h3>
            <p>{getDescription()}</p>
        </section>
    )
}