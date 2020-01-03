import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyContainer>
          <MyItem />
          <p>Hello again</p>
        </MyContainer>
      </div>
    );
  }
}

class MyContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>My Site</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}


class MyItem extends React.Component {
  render() {
    return <p><span>Hello</span></p>;
  }
}

export default App;
