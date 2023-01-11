import React, { useState } from 'react';

import { addTask, deleteTask, getTasks, updateTask } from './services/taskServices';

const Task = async () => {

    const [currentTask, setCurrentTask] = useState("");
    const [tasks, setTasks] = useState([]);
    try {
        const { data } = await getTasks();
        setTasks(data);
    } catch (error) {
        console.log(error);
    }
    const handleChange = ({ currentTarget: input }) => {
        setCurrentTask(input.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = tasks;
        try {
            const { data } = await addTask({ task: currentTask });
            setTasks(prevTasks => [...prevTasks, data]);
            setCurrentTask("");
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async (currentTask) => {
        try {
            const index = tasks.findIndex((task) => task.id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;
            await updateTask(currentTask, { completed: tasks[index].completed });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (currentTask) => {
        try {
            const updateTasks = tasks.filter(task => {
                task._id = currentTask;
            });
            setTasks(updateTasks);
            await deleteTask(currentTask);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>something</>
    );
};

export default Task;