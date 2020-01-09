import React from 'react';
import Counter from './Counter';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'Kalle'};
    this.onTextInputChange = this.onTextInputChange.bind(this);
  }

  onTextInputChange(value) {
    this.setState({value: value});
  }

  render() {
    return <div>
      <Text value={this.state.value} />
      <TextInput onChange={this.onTextInputChange} value={this.state.value} />
    </div>
  }
}

class Text extends React.Component {
  render() {
    return <p>Hejsan {this.props.value}</p>;
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return <input type="text" value={this.props.value} onChange={this.onChange} />;
  }

}




export default App;
