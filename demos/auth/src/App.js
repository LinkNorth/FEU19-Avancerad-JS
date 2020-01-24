import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Update from './Update';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="app">
      <Router>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={Update} />
      </Router>
    </div>
  }
}


export default App;
