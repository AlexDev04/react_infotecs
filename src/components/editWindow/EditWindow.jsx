import React, { useEffect, useState } from "react";
import { But, Dropdown, TextArea, TextInput } from "../UI";
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
            let newTodos = todos
            let elem = {title, description, status, id: taskId}
            newTodos[taskId] = elem
            params.setTodos(newTodos)
            console.log('edited')
        }
        else {
            let newTodos = todos
            newTodos.push({title, description, status, id: taskId})
            params.setTodos(newTodos)
            console.log('pushed')
            operation = `Edit task ${taskId}`
        }
        setOpenedTask(-1)
        // params.setTodos()
    }

    const deleteTask = () => {
        let newTodos = todos
        newTodos[taskId] = {}
        console.log(newTodos)
        params.setTodos(newTodos)
        setOpenedTask(-1)
    }

    useEffect(() => {
        setTitle(getTitle())
        setDescription(getDescription())
        setStatus(getStatus())
    }, [taskId])


    return(
        <div className={"editWindow " + className}>
            <h2>{operation}</h2>
            <TextArea value={title} placeholder="Title" onChange={setTitle} />
            <TextArea value={description} placeholder="Description" onChange={setDescription} />
            <Dropdown name="Status" updateData={setStatus} val={getStatus()} placeholder="Status" list={['Waiting', 'In progress', 'Done']} />
            <div className="editWindow_btns">
            <But temp="default" onClick={editTask}>Save</But>
            {operation != 'Add task' && <But temp="error" onClick={deleteTask}>Delete</But>}
            </div>

        </div>
    )
}