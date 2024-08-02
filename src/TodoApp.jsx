import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (id, taskName, description) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, taskName, description };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleStatusChange = (id, status) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status } : todo));
    setTodos(updatedTodos);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return false;
  });

  return (
    <div className="todo-app">
      <h1 className="apps">Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <div className="filter-btns">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter ▼
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterChange('all')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('completed')}>Completed</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('not completed')}>Not Completed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
       <h1 className='todo'>My Todo</h1>
      <TodoList
        todos={filteredTodos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default TodoApp;