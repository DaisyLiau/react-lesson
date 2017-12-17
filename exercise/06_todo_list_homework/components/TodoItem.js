var TodoItem = React.createClass({
  myClick: function () {
    this.props.toggleItem(this.props.id);
  },
  render: function () {
    var className = 'todo-item';
    if (this.props.checked) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.myClick}>
        <span>{this.props.id}</span>
        <h2>{this.props.text}</h2>
        <h3>{this.props.level}</h3>
      </li>
    );
  },
});
