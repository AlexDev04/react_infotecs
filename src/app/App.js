import { useEffect, useState } from 'react';
import { TextInput, But, TodoList, EditWindow } from '../components'
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

    // Стейт, который хранит todo после поиска (нужен для работы поисковой строки без кнопки "поиск")
    const [searchedTodos, setSearchedTodos] = useState(todos)

    // Стейт, который хранит открытую todo, если таковая имеется
    const [openedTask, setOpenedTask] = useState(0)

    // Стейт, который хранит поисковый запрос
    const [search, setSearch] = useState('')

    // Бесконечный индекса новой todo, который создает ее на основе индекса предыдущей
    function generateInd() {
        return todos.length
    }

    const handleSearch = (val) => {
        console.log('handleSearch')
        console.log(val)
        setSearch(val)
        setSearchedTodos(todos.filter(todo => todo.title.startsWith(val)))
    }

    useEffect(() => {
        setSearchedTodos(todos)
        console.log(todos)
    })

    return (
        <div className="todo">

            {/* Левая секция со всеми todo */}
            <section className="todo_bar">
                <TextInput placeholder="Search" value={search} onChange={handleSearch} />
                <TodoList todos={searchedTodos} openedTask={openedTask} setOpenedTask={setOpenedTask}/>
                <But temp="default" onClick={() => {
                    setOpenedTask(generateInd())
                }}>Add todo</But>
                <p>{searchedTodos.length}</p>
            </section>

            {/* Правая секция с открытой todo */}
            <EditWindow
                taskId={openedTask}
                todos={todos}
                setTodos={setTodos}
                className="todo_window"
                setOpenedTask={setOpenedTask}
            />

        </div>

    );
}

export default App;
