var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        {
          id: 1, text: 'Frank', checked: false, level: 30,
        },
        {
          id: 2, text: 'John', checked: true, level: 20,
        },
        {
          id: 3, text: 'Daisy', checked: false, level: 999,
        },
      ],
      nowSortType: 'byIndex',
    };
  },
  addItem: function (newText, newlevel) {
    var newItem = {
      text: newText,
      checked: false,
      id: this.state.list.length + 1,
      level: newlevel,
    };
    // var newList = this.state.list.concat(newItem)
    this.state.list.push(newItem);
    this.sortItem(this.state.nowSortType);
    /* this.setState({
      list: ,
    }); */
  },
  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return (item.id !== id) ? item : {
        id: item.id,
        text: item.text,
        checked: !item.checked,
        level: item.level,
      };
    });
    this.setState({
      list: list,
    });
  },
  sortItem: function (type) {
    var newList = [];
    var oldList = this.state.list;
    switch (type) {
      case 'increase':
        newList = oldList.sort(function (a, b) {
          return a.level - b.level;
        });
        break;
      case 'decrease':
        newList = oldList.sort(function (a, b) {
          return b.level - a.level;
        });
        break;
      default:
        newList = oldList.sort(function (a, b) {
          return a.id - b.id;
        });
    }
    this.setState({
      list: newList,
      nowSortType: type,
    });
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem}/>
        <SortBtn
          sortItem={this.sortItem}
          nowSortType={this.state.nowSortType}
        />
        <ul>
          {this.state.list.map(function (item, index) {
            return (
            <TodoItem
              checked={item.checked}
              id={item.id}
              key={index}
              toggleItem={toggleItem}
              text={item.text}
              level={item.level}
              />
            );
          })}
        </ul>
      </div>
    );
  },
});
