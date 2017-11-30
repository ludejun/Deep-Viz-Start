import React, { Component } from 'react';
import { PieChartSvg } from 'deep-viz';
import './App.css';

class App extends Component {
  render() {
    let list = [
      { name: '广场', value: 23 },
      { name: '优惠券', value: 20 },
      { name: '电影', value: 17 },
      { name: '闪购', value: 14 },
      { name: '门店', value: 12 },
      { name: '其它', value: 14 }
    ];
    return (
      <div className="App">
        <PieChartSvg data={list} color={['#0073CC', '#20CFAF']} unit="% " />
        <h1 className="App-title">
          You can get more examples{' '}
          <a href="https://ludejun.github.io/Deep-Viz-Website/#/main/introduction">here</a>
        </h1>
      </div>
    );
  }
}

export default App;
