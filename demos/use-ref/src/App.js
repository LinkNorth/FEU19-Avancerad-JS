import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  function onClickButton() {
    inputRef.current.focus();
  }

  return (
    <div>
      <p>
        <input type="text" ref={inputRef} style={{ border: "3px solid black" }} />
      </p>

      <button onClick={onClickButton}>Focus input</button>

      <h1>useRef</h1>
    </div>
  );
}

export default App;
