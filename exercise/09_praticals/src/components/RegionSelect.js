// code here
import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component {
  state = {
    cityIdx: 0,
    areaIdx: 0,
  }
  onChangeCity=(e) => {
    this.setState({
      cityIdx: e.target.value,
      areaIdx: 0,
    });
  }
  onChangeArea=(e) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }
  render() {
    // const selectedCity = zipCodes[this.state.cityIdx];
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];

    return (
      <div>
        <select value={this.state.cityIdx} onChange={this.onChangeCity}>
          {zipCodes.map(({ name }, index) => (
            <option value={index}>{ name }</option>
          ))}
        </select>
        <select value={this.state.areaIdx} onChange={this.onChangeArea}>
          {city.areas.map(({ name }, idx) =>
            <option value={idx}>{ name }</option>)}
        </select>
        <div>
          <h1>{city.name}</h1>
          <h2>{area.name}</h2>
          <h3>{area.zip}</h3>
        </div>
      </div>
    );
  }
}

export default RegionSelect
;
