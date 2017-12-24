import React, { Component } from 'react';

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filteredItem: props.items,
    };
  }
  onChangeFilter = (e) => {
    const filter = e.target.value;
    const needle = filter.toLowerCase();
    const filteredItems = this.props.items.filter(item => (
      item.toLowerCase().indexOf(needle) !== -1
    ));
    this.setState({ filter, filteredItems });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />
        <ul>
          {this.state.filteredItem.map(data => (
            <li>{data}</li>
          ))

          }
        </ul>
      </div>
    );
  }
}

export default FilterList;// code here
