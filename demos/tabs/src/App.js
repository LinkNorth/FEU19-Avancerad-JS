import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tab: 'home'};
  }

  onTabChange(tab) {
    this.setState({tab: tab});
  }

  render() {
    let el;
    if (this.state.tab === 'home') {
      el = <Home />;
    } else if (this.state.tab === 'about') {
      el = <About />;
    } else if (this.state.tab === 'contact') {
      el = <Contact />;
    }

    let activeStyle = {backgroundColor: 'red'};

    return (
      <div className="App">
        <div className="tabs-selectors">
          <button 
            style={this.state.tab === 'home' ? activeStyle : {}} 
            onClick={() => this.onTabChange('home')}>
            Home
          </button>
          <button style={this.state.tab === 'about' ? activeStyle : {}} onClick={() => this.onTabChange('about')}>About</button>
          <button style={this.state.tab === 'contact' ? activeStyle : {}} onClick={() => this.onTabChange('contact')}>Contact</button>
        </div>
        {el}
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return <h1>Home</h1>
  }
}

class About extends React.Component {
  render() {
    return <h2>About</h2>
  }
}

class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}

export default App;
