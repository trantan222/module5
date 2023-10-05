import {useEffect, useState} from "react";
import axios from "axios";

export  function Todolist() {
    const [todo, setTodo] = useState([])
    const [string, setString] = useState('')
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodo(response.data)
            })
            .catch((e) => {
            console.log(e)
        })
    },[])

    const AddTodo = () => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: string
        })
            .then((response) => {
                setTodo([...todo,response.data])
                setString('')
                alert("success")
            })
            .catch((e) => {
                console.log(e)
            })
    }
    // const Change = (event) => {
    //     setString(event.target.value)
    // }

    return (
        <div>
            <h1>Todo list</h1>
            <input
                value={string}
                onChange={event => setString(event.target.value)}
                type="text"
            />
            <button onClick={AddTodo}>Submit</button>
            <ul>
                {todo.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}