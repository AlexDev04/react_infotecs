import React, { useEffect, useState } from "react";
import { But, TextArea, TextInput } from "../UI";
import './EditWindow.sass';



export const EditWindow = props => {

    const {className, taskId, todos, ...params} = props

    
    let operation
    
    if(taskId == todos.length) {
        operation = 'Add task'
    }
    else operation = `Edit task ${taskId}`

    // Getters

    const getTitle = () => {
        return operation.startsWith('Edit') && todos.find(todo => todo.id == taskId).title || ''
    }

    const getDescription = () => {
        return operation.startsWith('Edit') && todos.find(todo => todo.id == taskId).description || ''
    }

    const getStatus = () => {
        return operation.startsWith('Edit') && todos.find(todo => todo.id == taskId).status || ''
    }

    // Стейт, который хранит заголовок
    const [title, setTitle] = useState(getTitle())

    // Стейт, который хранит описание
    const [description, setDescription] = useState(getDescription())

    // Стейт, который хранит статус
    const [status, setStatus] = useState(getStatus())

    const editTask = () => {
        console.log(todos.length > taskId)
        if(todos.length > taskId) {
            let elem = {title, description, status, id: taskId}
            todos[taskId] = elem
            console.log('edited')
        }
        else {
            let newTodos = todos
            newTodos.push({title, description, status, id: taskId})
            params.setTodos(newTodos)
            console.log('pushed')
        }
        // params.setTodos()
    }

    useEffect(() => {
        setTitle(getTitle())
        setDescription(getDescription())
        setStatus(getStatus())
    }, [taskId])

    return(
        <section className={"editWindow " + className}>
            <h2>{operation}</h2>
            <TextInput value={title} placeholder="Title" onChange={setTitle} />
            <TextArea value={description} onChange={setDescription} />
            <But temp="default" onClick={editTask}>Save</But>
        </section>
    )
}