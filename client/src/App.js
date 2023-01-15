import './App.css';

import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:8080';

function App() {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [popupActive, setPopupActive] = useState();


  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <div className='App'>
      <h1>Welcome, {user}</h1>
      <h4>Your Tasks</h4>
      <div className='todos'>
        { }
        {todos.map(({ _id, text, complete }) => (
          <div className={
            'todo ' + (complete ? "is-complete" : "")
          } key={_id} onClick={() => completeTodo(_id)}>
            <div className='checkbox'></div>
            <div className="text">{text}</div>
            <div className="delete-todo" onClick={()=> deleteTodo(_id)}>x</div>
          </div>
        ))}

      </div>
    </div>
  );

  function getTodos() {
    return fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((e) => console.log(e));;
  }

  async function completeTodo(id) {
    const data = await fetch(API_BASE + "/todo/complete/" + id)
      .then(res => res.json())
    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete;
      }
      return todo;
    }))
  }

  async function deleteTodo(id) {
    const data = await fetch(API_BASE + '/todos/delete/' + id, {
      method: 'DELETE'
    })
      .then(res => res.json());
    setTodos(todos => todos.filter(todo => todo._id !== data._id));
  }




}
export default App;