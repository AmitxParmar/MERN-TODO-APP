import './App.css';

import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState();

  return (
    <div className='App'>
      <h1>Welcome, {user}</h1>
      <h4>Your Tasks</h4>

      <div className='todos'></div>
    </div>
  );
}

export default App;
