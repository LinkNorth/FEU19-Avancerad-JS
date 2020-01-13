import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    let words = this.state.text.split(" ").filter(word => word);
    let numWords = words.length;


    let textStyle = {};
    if (numWords > 20) {
      textStyle = {color: 'red'};
    }

    return (
      <div>
        <textarea onChange={this.onChange} value={this.state.text} />
        <p style={textStyle}>{numWords}/20</p>
      </div>
    );
  }
}

export default App;
