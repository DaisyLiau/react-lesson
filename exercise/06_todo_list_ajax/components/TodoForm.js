var TodoForm = React.createClass({
  mySubmit: function (e) {
    e.preventDefault();
    var text = this.ipt.value;
    this.ipt.value = '';
    this.props.addItem(text);
  },
  inputRef: function (ipt) {
    this.ipt = ipt;
  },
  render: function () {
    return (
      <form onSubmit={this.mySubmit} className="todo-form">
        <input type= "text" ref={this.inputRef}/>
      </form>
    );
  },
});
