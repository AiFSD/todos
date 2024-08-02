import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  const handleAddTodo = () => {
    onAddTodo({ taskName, description, status, id: Date.now() });
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

    return (
      <div className="first">
    <form>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="input-field"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
                    className="input-field"
                    
                />
                 <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="status-selects"
      >
        <option value="not completed" className='notComplete'>Not Completed</option>
        <option value="completed" className='complete'>Completed</option>
      </select>
                <div></div>
                
     
      <button type="button" onClick={handleAddTodo} className="add-todo-btn">
        Add Todo
      </button>
      </form>
      </div>
  );
}

export default TodoForm;