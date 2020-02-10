import React, { useState } from 'react';

const ANIMALS = ["dogs", "cats", "birds", "bears", "whales"];

function App() {
  const [selected, updateSelected] = useState("birds");
  const [moreState, updateMoreState] = useState(0);
  
  function onChange(e) {
    updateSelected(e.target.value);
  }

  return (
    <div>
      {ANIMALS.map((animal) => (
        <p>
          <label>
            {animal} 
            <input
              onChange={onChange}
              type="radio"
              name="animals"
              checked={selected === animal}
              value={animal}
            />
          </label>
        </p>
      ))}
      <p>I love {selected}!</p>
    </div>
  );
}

export default App;
