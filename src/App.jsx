import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
        
      } else {
        return todo;
      }
    }));
  }

  function editTodo(id ,newText) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    }))
  }

  return (
    <div className="todo-list">
      <h1>Your Todos !</h1>
      <input
        type='text'
        placeholder="What's the task for today?"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)} className='add-btn'>Add</button>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          editTodo={editTodo}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
