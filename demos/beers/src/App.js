import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Beers from './Beers';
import BeerInfo from './BeerInfo';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="app">
      <Router>
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerInfo} />
      </Router>
    </div>
  }
}


export default App;
