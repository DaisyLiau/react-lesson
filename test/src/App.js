import React, { Component } from 'react';

class App extends Component {
  state = {
    value: '',
    strength: '',
  }
  myChange =(e) => {
    const value = e.target.value;
    this.setState({
      value,
      strength: this.calcStrength(value),
    });
  }
  calcStrength = (value) => {
    let score = value.length;
    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    else if (score > 20) return 'Great';
    else if (score > 10) return 'Good';
    return 'nono';
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.myChange}
        />
        <span>{this.state.strength}</span>
      </div>
    );
  }
}

export default App;
