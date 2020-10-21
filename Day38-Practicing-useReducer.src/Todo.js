import React from "react";
import { ACTIONS } from "./Todos";

const Todo = ({ todo, dispatch }) => {
  return (
    <li className="todo-item" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      {todo.name}
      <div className="buttons">
      <button className="btn"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button className="btn"
      onClick={() => 
      dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id}} )}>
          Delete
      </button>
      </div>
    </li>
  );
};

export default Todo;
