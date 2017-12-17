var TodoForm = React.createClass({
  getInitialState: function () {
    return {
      isWrong: false,
    };
  },
  mySubmit: function (e) {
    e.preventDefault();
    var text = this.ipt.value;
    var level = this.level.value;
    this.ipt.value = '';
    this.level.value = '';
    this.ipt.focus();
    var re = /^[0-9]+$/;
    if (re.test(level)) {
      this.props.addItem(text, level);
    } else {
      this.setState({
        isWrong: true,
      });
      this.level.value = '請輸入數字';
    }
  },
  nameRef: function (ipt) {
    this.ipt = ipt;
  },
  levelRef: function (level) {
    this.level = level;
  },
  clearBg: function () {
    this.setState({
      isWrong: false,
    });
    this.level.value = '';
  },
  render: function () {
    return (
      <form onSubmit={this.mySubmit} className="todo-form">
        <label htmlFor="UserName">名稱： </label>
        <input id="UserName" type= "text" ref={this.nameRef}/>
        <label htmlFor="UserLevel">級別： </label>
        <input
          id="UserLevel"
          type= "text"
          ref={this.levelRef}
          onFocus={this.clearBg}
          className={this.state.isWrong && 'wrong'}
        />
        <button className="submit">送出</button>
      </form>
    );
  },
});
