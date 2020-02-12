import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return Math.min(10, state + action.amount);
    case "decrease":
      return Math.max(0, state - action.amount);
    case "reset":
      return 0;
    default:
      return state;
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>useReducer example</h1>
      <button onClick={() => dispatch({ type: "increase", amount: 2 })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease", amount: 2 })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default App;
