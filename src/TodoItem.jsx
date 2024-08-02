import React, { useState } from 'react';

function TodoItem({ todo, onEditTodo, onDeleteTodo, onStatusChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(todo.taskName);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditTodo(todo.id, editedTaskName, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input className="efn"
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            placeholder="Task Name"
          />
          <input className='efd'
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Description"
          />
          <div>
          <button className='efb' type="submit">Save</button>
          <button className='efb' onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
              </form>
      ) : (
        <>
          <h2>{todo.taskName}</h2>
          <p>{todo.description}</p>
          <p>
            Status: {todo.status}{' '}
            <select
              value={todo.status}
              onChange={(e) => onStatusChange(todo.id, e.target.value)}
              className="status-select"
            >
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
          <button onClick={() => onDeleteTodo(todo.id)} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;