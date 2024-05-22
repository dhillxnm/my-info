import React from 'react';

const TaskForm = ({ taskInput, setTaskInput, handleSubmit, editMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="taskInput" 
        placeholder="Add task" 
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">{editMode ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
