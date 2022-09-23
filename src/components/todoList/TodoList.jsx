import React, { useState, useEffect } from "react";
import './TodoList.sass';
import { TodoItem } from "../todoItem";



export const TodoList = ({todos, openedTask, setOpenedTask}) => {

    console.log(todos)
    console.log(openedTask)

    const [list, setList] = useState(todos)

    useEffect(() => {
        setList(todos)
    }, [openedTask])

    return(
        <div className="todoList">
            {list.map( todo => (
                <TodoItem
                    setOpenedTask={setOpenedTask}
                    opened={todo.id === openedTask}
                    key={todo.id}
                    taskId={todo.id}
                    title={todo.title}
                    status={todo.status}
                />
            ))
            }
        </div>
    )
}