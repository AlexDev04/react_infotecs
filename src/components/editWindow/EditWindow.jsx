import React, { useEffect, useState } from "react";
import { But, TextArea, TextInput } from "../UI";
import './EditWindow.sass';



export const EditWindow = props => {

    const {className, taskId, todos, setOpenedTask, ...params} = props
    
    let operation
    
    if(taskId == todos.length) {
        operation = 'Add task'
    }
    else operation = `Edit task ${taskId}`

    // Getters

    const getTitle = () => {
        console.log(operation)
        console.log(taskId)
        if(operation != 'Add task') return todos.find(todo => todo.id == taskId).title
        else return ''
    }

    const getDescription = () => {
        if(operation != 'Add task') return todos.find(todo => todo.id == taskId).description
        else return ''
    }

    const getStatus = () => {
        if(operation != 'Add task') return todos.find(todo => todo.id == taskId).status
        else return ''
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
            operation = `Edit task ${taskId}`
        }
        setOpenedTask(0)
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