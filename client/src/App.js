import './App.css';

import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:8080';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [popupActive, setPopupActive] = useState();


  useEffect(() => {
    getTodos();
    console.log(todos)
  }, []);

  return (
    <>
      <div className='App'>
        <h1> Welcome, Amit </h1>
        <h4> Your Tasks </h4>

        <div className='todos'>
          {todos.map(({ _id, text, complete }) => (
            <div className={
              'todo ' + (complete ? "is-complete" : "")
            } key={_id} onClick={() => completeTodo(_id)}>
              <div className='checkbox'></div>
              <div className="text">{text}</div>
              <div className="delete-todo" onClick={() => deleteTodo(_id)}>x</div>
            </div>
          ))}
        </div>
        <div className="add__popup" onClick={() => setPopupActive(true)}>+</div>
        {popupActive ? (<>
          <div className='closePopup' onClick={() => setPopupActive(false)}>x</div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type={`text`}
              className='add-todo-input'
              onChange={e => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTodo}> Create Task </div>
          </div>
        </>) : (<></>)}
      </div>
    </>
  );

  async function getTodos() {
    try {
      const res = await fetch(API_BASE + "/todos");
      const data = await res.json();
      return setTodos(data);
    } catch (e) {
      return console.log(e);
    };
  }

  async function completeTodo(id) {
    const data = await fetch(API_BASE + "/todo/complete/" + id, {
      method: 'POST',
    })
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

  async function addTodo() {
    const data = await fetch(API_BASE + "/todo/new", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo
      })
    })
      .then(res => res.json());
    console.log(data);
  }


}
export default App;