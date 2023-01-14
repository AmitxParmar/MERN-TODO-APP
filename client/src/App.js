import './App.css';

import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState();

  return (
    <div className='App'>
      <h1>Welcome, {user}</h1>
      <h4>Your Tasks</h4>

      <div className='todos'>
        <div className='todo'>
          <div className='checkbox'></div>

          <div className="text">Get the Bread</div>

          <div className="delete-todo"></div>

        </div>
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">get</div>
          <div className="delete-todo">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;