import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import {token$, updateToken} from './store';


class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: token$.value,
      name: '',
      age: '',
      email: null,
      redirect: false,
    };


    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      this.setState({...response.data.profile});
    })
    .catch(e => {
      console.error(e);
      updateToken(null);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.put('http://localhost:8080/me', {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    }, {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(response => {
      this.setState({redirect: true});
    })
    .catch(e => {
      console.error(e);
      updateToken(null);
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;
    if (this.state.redirect) return <Redirect to="/" />;

    return <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
        <input type="number" name="age" onChange={this.onChange} value={this.state.age} />
        <button type="submit">Update</button>
      </form>
    </div>
  }
}


export default Update;
