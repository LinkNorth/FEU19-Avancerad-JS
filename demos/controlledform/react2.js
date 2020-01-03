class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    this.setState({name: value});
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return React.createElement('div', {},
      React.createElement('form', {onSubmit: this.onSubmit}, 
        React.createElement('input', {value: this.state.name, onChange: this.onChange})
      ),
      React.createElement('p', {}, `Hello ${this.state.name.toUpperCase()}`)
    );
  }
}


ReactDOM.render(React.createElement(ControlledForm), document.getElementById('app'));
