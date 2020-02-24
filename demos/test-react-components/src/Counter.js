import React, { useState } from "react"

const Counter = () => {
  const [value, updateValue] = useState(0);

  return (
    <>
      <button onClick={() => updateValue(value + 1)}>Increment</button>
      <p>Current value is: {value}</p>
    </>
  );
};

export default Counter;
