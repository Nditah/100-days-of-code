import React, { useReducer } from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import ComponentA from "./GlobalState/ComponentA";
import ComponentB from "./GlobalState/ComponentB";
import ComponentC from "./GlobalState/ComponentC";
import DataFetchingOne from "./Fetching/DataFetchingOne";
import DataFetchingTwo from "./Fetching/DataFetchingTwo";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>
        Local State Managment useReducer
      </h2>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <h2 style={{ textAlign: "center" }}>
        Global State Managment useReducer - useContext
      </h2>
      <div className="section">
        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CountContext.Provider>
      </div>
      <h2 style={{ textAlign: "center" }}>
        Fetching data with useReducer 
      </h2>
      <div className="section">
    <DataFetchingOne />
    <DataFetchingTwo />
      </div>
    </div>
  );
}

export default App;
