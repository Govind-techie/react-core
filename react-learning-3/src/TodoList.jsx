import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Main TodoList component that manages tasks, input state, and UI rendering
export default function TodoList() {
  // 'todo' stores the list of all tasks (each task is an object: {task, id, done})
  // 'newTodo' stores the current text typed by the user in the input field
  let [todo, setTodo] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  // Adds a new todo when the user clicks "Add"
  // Generates a unique ID using uuid and sets 'done' initially to false
  function addTodo() {
    setTodo((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), done: false },
    ]);
    // Clear the input box after adding a task
    setNewTodo("");
  }

  // Deletes a todo by filtering it out using its unique ID
  let deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  // Marks a task as completed by updating its 'done' property
  // map() creates a new updated array without mutating previous state
  let markDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((t) =>
        t.id === id ? { ...t, done: true } : t
      )
    );
  };

  // UI rendering starts here
  // Includes input field, Add button, and the list of tasks
  return (
    <div>
      <h4>TodoList</h4>
      <input
        type="text"
        placeholder="place your todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        style={{
          marginLeft: 10,
        }}
        onClick={addTodo}
      >
        Add
      </button>
      <hr />
      <h3>Your Tasks</h3>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {/* If todo.done is true, apply line-through style */}
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            {/* Buttons to delete a task or mark it as done */}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            {/* Buttons to delete a task or mark it as done */}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => markDone(todo.id)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}