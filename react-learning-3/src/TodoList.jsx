import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodo((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), done: false },
    ]);
    setNewTodo("");
  }

  let deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  let markDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((t) => {
        t.id === id ? { ...t, done: true } : t;
      })
    );
  };

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
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
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
