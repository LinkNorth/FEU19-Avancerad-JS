import React from 'react';

import List from "./List";
import Counter from "./Counter";

function App() {
  return (
    <div style={{padding: 20}}>
      <h1>List example</h1>

      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>

      <h1>Counter example</h1>
      <Counter />
    </div>
  );
}

export default App;
