import React, { useState } from 'react';

function App() {
  const [value, updateValue] = useState(0);

  function increaseCounter() {
    updateValue(value + 1);
  }

  function decreaseCounter() {
    updateValue(value - 1);
  }

  return (
    <div>
      <h1>useState example</h1>
      <p>{value}</p>
      <p>
        <button onClick={increaseCounter}>Increase counter</button>
      </p>
      <p>
        <button onClick={decreaseCounter}>Decrease counter</button>
      </p>
    </div>
  );
}

export default App;
