import React, { Component } from 'react';
import axios from 'module';

const API = 'https://ranking-scars377.c9users.io/';

class App extends Component {
  state = {
    items: [],
  }
  componentDidMount() {
    axios.get(API)
      .then((rs) => {
        this.setState({
          items: rs.data,
        });
      });
  }
  onChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
    this.search(e.target.value);
  }
  search = (q) => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      axios.get(`${API}?q=${q}`)
        .then((rs) => {
          this.setState({
            items: rs.data,
          });
        });
    }, 1000);
  }
  render() {
    return (
      <div>
        <input type="text" />
        {this.state.items.map(item => (
          <div>
            <img src={item.picture} width="60" />
            <span>{item.openID}</span>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
