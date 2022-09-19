import { useState } from 'react';
import { SearchBar, But, TodoList, EditWindow } from '../components'
import logo from '../images/logo.svg';
import './App.sass';

function App() {

    // Стейт, который хранит список todo
    const [todos, setTodos] = useState([
        {
            id: 0,
            title: 'Make light web-app using Vue.js without any APIs',
            status: 'wait',
            description: 'some text some text some text some text some text some text some text some text some text some text some text some text'
        },
        {
            id: 1,
            title: 'Restruct app #83',
            status: 'inProgress',
            description: 'some text some text some text some text some text some text some text some text some text some text some text some text'
        },
        {
            id: 2,
            title: 'Connect data base to our new app',
            status: 'done',
            description: 'some text some text some text some text some text some text some text some text some text some text some text some text'
        }
    ])

    // Стейт, который хранит открытую todo, если таковая имеется
    const [openedTask, setOpenedTask] = useState(0)

    // Бесконечный индекса новой todo, который создает ее на основе индекса предыдущей
    function generateInd() {
        return todos.length
    }

    return (
        <div className="todo">

            {/* Левая секция со всеми todo */}
            <section className="todo_bar">
                <SearchBar placeholder="Search" />
                <TodoList todos={todos} setTodos={setTodos} openedTask={openedTask} setOpenedTask={setOpenedTask}/>
                <But temp="default" onClick={() => {
                    setOpenedTask(generateInd())
                }}>Add todo</But>
            </section>

            {/* Правая секция с открытой todo */}
            <EditWindow taskId={openedTask} todos={todos} className="todo_window"/>

        </div>

    );
}

export default App;
