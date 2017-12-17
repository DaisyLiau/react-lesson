var SortBtn = React.createClass({
  byIndex: function (e) {
    e.preventDefault();
    this.props.sortItem('byIndex');
  },
  increase: function (e) {
    e.preventDefault();
    this.props.sortItem('increase');
  },
  decrease: function (e) {
    e.preventDefault();
    this.props.sortItem('decrease');
  },
  // ---- ref -----
  byIndexRef: function (arg) {
    this.byIndexRef = arg;
  },
  increaseRef: function (arg) {
    this.increaseBtn = arg;
  },
  decreaseRef: function (arg) {
    this.decreaseBtn = arg;
  },
  // ---- ref -----
  render: function () {
    var toggleItem = this.toggleItem;
    var isByIndex = this.props.nowSortType === 'byIndex';
    var isIncrease = this.props.nowSortType === 'increase';
    var isDecrease = this.props.nowSortType === 'decrease';
    return (
      <div className="sort-btn">
        <a onClick={this.byIndex} ref={this.byIndexRef} className={isByIndex ? 'byIndex active' : 'byIndex'}>依序</a>
        <a onClick={this.increase} ref={this.increaseRef} className={isIncrease ? 'increase active' : 'increase'}>遞增</a>
        <a onClick={this.decrease} ref={this.decreaseRef} className={isDecrease ? 'decrease active' : 'decrease'}>遞減</a>
      </div>
    );
  },
});
