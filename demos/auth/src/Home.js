import React from 'react';
import axios from 'axios';
import {token$, updateToken} from './store';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      token: token$.value,
    };
  }

  componentDidMount() {
    token$.subscribe(token => {
      this.setState({token});
    });

    axios.get('http://localhost:8080/me', {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(response => {
      this.setState({profile: response.data.profile});
    })
    .catch(e => {
      console.error(e);
      updateToken(null);
    });
  }

  logout() {
    updateToken(null);
  }

  render() {
    if (!this.state.token) {
      return <Redirect to="/login" />;
    }

    let {name, age, email} = this.state.profile;

    return <div>
      <button onClick={this.logout}>Logga ut</button>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  }
}

export default Home;
