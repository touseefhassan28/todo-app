import React, {useState} from 'react';

function TodoItem({ todo, deleteTodo, toggleCompleted , editTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

  function handleChange() {
    toggleCompleted(todo.id);
  }


  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    editTodo(todo.id, newText);
    setIsEditing(false);
  }

  function handleCancel() {
    setNewText(todo.text);
    setIsEditing(false);
  }


  return (
    <div className="todo-item">
        <div className="text">
      <input 
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleChange}
      />
{isEditing ? (
          <input 
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p className={todo.isCompleted ? 'completed' : ''}>{todo.text}</p>
        )}
      </div>
      <div className="button">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;