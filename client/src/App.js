import './App.css';

import { Button, Paper, TextField } from '@material-ui/core';
import { CheckBox } from '@mui/icons-material';

function App() {
  let tasks;
  let currentTask;

  return (
    <div className='App flex'>
      <Paper elevation={3} className='container'>
        <div className='heading'>TO-DO</div>

        <form
          onSubmit={handleSubmit}
          className='flex'
          style={{ margin: "15px 0" }}
        >
          <TextField
            variant='outlined'
            size='small'
            style={{ width: "80%" }}
            value={currentTask}
            required={true}
            onChange={handleChange}
            placeholder='Add New To - Do' />
          <Button
            style={{ height: "40px" }}
            color='primary'
            variant='outlined'
            type='submit'
          >
            Add Task
          </Button>
        </form>
        <div>
          {tasks.map((task) => {
            <Paper key={task._id} className='flex task_container'>
              <CheckBox
                checked={task.completed}
                onClick={() => handleUpdate(task._id)}
                color='primary'
              />
              <div className={task =.completed ? "task line_through" : "task"}>
                {task.task}
              </div>
              <Button
                onClick={() => handleDelete(task._id)}
                color='secondary'
              >
                Delete
              </Button>
            </Paper>;
          })}
        </div>
      </Paper>
    </div>

  );
}

export default App;
