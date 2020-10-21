import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: "decrement" });
  };

  return (
    <div className="container">
      <h1>#counter</h1>
      <button className="btn count-btn" onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button className="btn count-btn" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
