import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class Beers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }
  
  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        this.setState({beers: response.data});
      })
      .catch(err => {
        console.error('Err', err);
      });
  }

  render() {
    return <div>
      <Helmet>
        <title>Punk Beers</title>
      </Helmet>
      <h1>Punk Beers</h1>
      <ul>
        {this.state.beers.map(x => ( 
          <li key={x.id}><Link to={'/beers/' + x.id}>{x.name}</Link></li>   
        ))}
      </ul>
    </div>
  }
}

export default Beers;
