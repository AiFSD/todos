import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEditTodo, onDeleteTodo, onStatusChange }) {
  return (
      <div className="todo-list">
        
             
              
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TodoList;