import React from 'react';
import { FiEdit, FiTrash2, FiCheckSquare } from 'react-icons/fi';

const TaskList = ({ tasks, dispatch, handleEditTask }) => {
  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(date).toLocaleString('en-US', options);
  };

  return (
    <div className="task-list container">
      {tasks.map((task) => (
        task && (
          <div key={task.id} className={`task ${task.completed ? 'completed' : 'not-completed'}`}>
            <div className='text'>{task.text}</div>
            <div className='task-footer flex'>
              <span className="task-date">{formatDate(task.createdAt)}</span>
              <div className="icons flex">
                <FiEdit className="edit" onClick={() => handleEditTask(task)} />
                <FiTrash2 className="trash" onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })} />
                <FiCheckSquare className="check" onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })} />
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default TaskList;
