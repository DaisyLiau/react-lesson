import React, { Component } from 'react';
import './MenuBar.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.items[0],
    };
  }
  setCurrent = (item) => {
    this.setState({ current: item });
  }
  render() {
    return (
      <ul>
        {this.props.items.map((data) => {
          let className = 'menubar-item';
          if (data === this.state.current) {
            className += 'active';
          }
          return <li className="menubar-item" onClick={() => this.setCurrent}>{data}</li>;
        },
        )

        }
      </ul>
    );
  }
}

export default MenuBar;
