import React, { useEffect } from "react";
import './TodoList.sass';
import { TodoItem } from "../todoItem";



export const TodoList = ({todos, openedTask, setOpenedTask}) => {

    console.log(todos)
    console.log(openedTask)

    return(
        <div className="todoList">
            {   todos.map( todo => (
                <TodoItem setOpenedTask={setOpenedTask} opened={todo.id === openedTask} key={todo.id} taskId={todo.id} title={todo.title} status={todo.status}/>
            ))
            }
        </div>
    )
}