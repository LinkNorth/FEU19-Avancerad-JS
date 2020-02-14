import React, { useReducer } from 'react';
import './App.css';

let currentId = 0;

function reducer(state, action) {
  let newTodos;

  switch (action.type) {
    case "update_content":
      return {
        ...state,
        content: action.content,
      };
    case "add_todo":
      newTodos = [...state.todos];

      newTodos.push({
        content: state.content,
        done: false,
        id: action.id,
      });

      return {
        todos: newTodos,
        content: "",
      };
    case "remove_todo":
      return {
        content: state.content,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case "toggle_todo":
      newTodos = [...state.todos];

      const idx = newTodos.findIndex(todo => todo.id === action.id);

      newTodos[idx] = {
        ...newTodos[idx],
        done: !newTodos[idx].done,
      };

      return {
        content: state.content,
        todos: newTodos,
      };
    default:
      return state;
  }
}

const newState = reducer({ 
  todos: []
}, {
  type: "add_todo",
  content: "Klippa gräset",
});

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [], content: "" });
  
  console.log(state);

  return (
    <div className="App">
      <h1>Todo app with useReducer</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add_todo", id: currentId });
        currentId += 1;
      }}>
        <input type="text" value={state.content} onChange={(e) => dispatch({
          type: "update_content",
          content: e.target.value,
        })} />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li style={{ textDecoration: todo.done ? "line-through" : "none" }} onClick={() => dispatch({ type: "toggle_todo", id: todo.id })} key={todo.id}>
            {todo.content}
            <button onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "remove_todo", id: todo.id });
            }}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
