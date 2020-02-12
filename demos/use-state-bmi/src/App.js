import React, { useState } from 'react';

function App() {
  const [height, updateHeight] = useState(0);
  const [weight, updateWeight] = useState(0);

  function onChangeHeight(e) {
    updateHeight(parseInt(e.target.value, 10));
  }

  function onChangeWeight(e) {
    updateWeight(parseInt(e.target.value, 10));
  }

  let bmi = weight / (height / 100)**2;

  if (Number.isNaN(bmi) || !Number.isFinite(bmi)) {
    bmi = 0;
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Height (cm)
        <input
          type="number"
          value={height}
          onChange={onChangeHeight}
        />
      </label>

      <label>
        Weight (kg)
        <input
          type="number"
          value={weight}
          onChange={onChangeWeight}
        />
      </label>

      <p>{bmi}</p>

    </div>
  );
}

export default App;
