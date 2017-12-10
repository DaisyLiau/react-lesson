var TodoList = React.createClass({

  getInitialState: function () {
    return {
      list: [
        { id: 1, text: 'buy pen', done: false },
        { id: 2, text: 'buy apple pen', done: false },
        { id: 3, text: 'buy apple', done: true },
      ],
    };
  },
  addItem: function (newTodo) {
    var newItem = {
      text: newTodo,
      done: false,
      id: this.state.list.length + 1,
    };
    // this.state.list.push(newTodo);
    // this.forceUpdate();

    this.setState({
      list: this.state.list.concat(newItem),
    });
  },
  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return (item.id !== id) ? item : {
        id: item.id,
        text: item.text,
        done: !item.done,
      };
    });
    this.setState({
      list: list,
    });

    /* var list = this.state.list;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      if (item.id === id) {
        item.done = !item.done;
        break;
      }
      this.forceUpdate();
    } */
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem}/>
        <ul>
          {this.state.list.map(function (item, index) {
            return (
            <TodoItem done={item.done} id={item.id} key={index} toggleItem={toggleItem}>
              {item.text}
            </TodoItem>);
          })}
        </ul>
      </div>
    );
  },
});
