import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { completed: false, name: name, id: Math.random() };
}

const Todos = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTodos([...todos, name]);
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div className="container">
        <h1>#todoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleInput} />
        <button className="btn">Submit</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} dispatch={dispatch} />
          // <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
