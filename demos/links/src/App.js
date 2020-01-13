import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return <div>
      <Links>http://google.com is the coolest site! Much cooler than http://bing.com</Links>
    </div>
  }
}

function isLink(str) {
  return /^https?/.test(str);
}

function Links(props) {
  let content = props.children.split(" ").map(word => {
    if (isLink(word)) {
      return <a href={word}>{word}</a>
    }
    return <> {word} </>;
  });
  return <>{content}</>
}

export default App;
