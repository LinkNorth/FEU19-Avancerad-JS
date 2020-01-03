class Item extends React.Component {
  render() {
    return React.createElement('li', {}, 
      this.props.value,
      React.createElement('button', {}, 'Remove me!')
    );
  }
}

class List extends React.Component {
  render() {
    let todos = this.props.todos;
    return React.createElement('ul', {}, todos.map(x => {
      return React.createElement(Item, {key: x, value: x});
    }));
  }
}

let todos = [
  'Buy fruit',
  'Watch show',
  'Cook dinner',
];

ReactDOM.render(React.createElement(List, {todos: todos}), document.getElementById('app'));
