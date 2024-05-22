import React, { useState, useReducer, useEffect } from 'react';
import './css/index.css';
import TaskForm from './components/TaskForm';
import TaskList from './components//TaskList';
import { reducer } from './components/Reducer';

const TodoApp = () => {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [taskInput, setTaskInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setTaskInput(task.text);
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch({ type: 'UPDATE_TASK', payload: { id: taskToEdit.id, text: taskInput } });
      setEditMode(false);
      setTaskToEdit(null);
    } else {
      dispatch({ type: 'ADD_TASK', payload: taskInput });
    }
    setTaskInput('');
  };

  return (
    <div className='container'>
      <div className="header">
        <h1>To-Do App</h1>
        <TaskForm 
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleSubmit={handleSubmit}
          editMode={editMode}
        />
      </div>
      <TaskList 
        tasks={tasks} 
        dispatch={dispatch} 
        handleEditTask={handleEditTask}
      />
    </div>
  );
};

export default TodoApp;
