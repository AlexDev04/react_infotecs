import React from "react";
import { TextInput } from "../UI";
import './EditWindow.sass';



export const EditWindow = props => {

    const {className, taskId, todos, ...params} = props

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
            <TextInput value={getTitle()} placeholder="Title" />
            <textarea value={getDescription()} />
        </section>
    )
}