import React from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {Redirect} from 'react-router-dom';

class BeerInfo extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      beer: {},
      redirect: false,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('https://api.punkapi.com/v2/beers/' + id)
      .then(response => {
        let data = response.data;
        if (data.length === 1) {
          this.setState({beer: data[0]});
        }
      })
      .catch(err => {
        console.error('Err', err);
        this.setState({redirect: true});
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/beers" />;
    }
    let beer = this.state.beer;

    return <div>
      <Helmet>
        <title>{beer.name}</title>
      </Helmet>
      <h1>{beer.name}</h1>
      <img height={100} src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  }
}

export default BeerInfo;
