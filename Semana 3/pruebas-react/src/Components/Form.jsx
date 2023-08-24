import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, serTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 1'},
        {todo: 'todo 1'}
    ])

    const handChange = e => setTodo({[e.tarjet.name]: e.tarjet.value})
    const handClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }
        setTodo([...todo, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodo(newTodos)
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name = "todo" onChange={handChange} />
                <button onClick={handClick}>agregar</button>
            </form>
                {
                    todos.map((value, index) => (
                        <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                       ))
                }
        </>
    )
}
export default Form