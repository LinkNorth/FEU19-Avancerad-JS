import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

let counter = 0;

function App() {
  const [name, updateName] = useState("");
  const [query, updateQuery] = useState("");

  const [debouncedQuery] = useDebounce(query, 400);

  function onChangeName(e) {
    updateName(e.target.value);
  }

  function onChangeQuery(e) {
    updateQuery(e.target.value);
  }

  function onClickReset() {
    updateName("");
  }

  useEffect(() => {
    document.title = `Rendered ${counter} times!`;
    counter += 1;
  });

  useEffect(() => {
    console.log("Query changed to", query);
  }, [debouncedQuery]);
    
  return (
    <>
      <h1>Hooks example</h1>

      <h2>useState</h2>
      <input type="text" value={name} onChange={onChangeName} />
      <button onClick={onClickReset}>Reset</button>
      <p>Hello, {name}!</p>

      <h2>useEffect</h2>
      <input type="text" placeholder="Search" value={query} onChange={onChangeQuery} />
      <p>Search for "{query}"</p>
    </>
  );
}

export default App;
