var TodoItem = React.createClass({
  myClick: function () {
    this.props.toggleItem(this.props.id);
  },
  render: function () {
    var className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.myClick}>
        {this.props.children}
      </li>
    );
  },
});
