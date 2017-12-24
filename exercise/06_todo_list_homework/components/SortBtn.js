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
  render: function () {
    var toggleItem = this.toggleItem;
    var isByIndex = this.props.nowSortType === 'byIndex';
    var isIncrease = this.props.nowSortType === 'increase';
    var isDecrease = this.props.nowSortType === 'decrease';
    return (
      <div className="sort-btn">
        <a onClick={this.byIndex} className={isByIndex ? 'byIndex active' : 'byIndex'}>依序</a>
        <a onClick={this.increase} className={isIncrease ? 'increase active' : 'increase'}>遞增</a>
        <a onClick={this.decrease} className={isDecrease ? 'decrease active' : 'decrease'}>遞減</a>
      </div>
    );
  },
});
