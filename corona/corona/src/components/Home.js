import React, { Component } from 'react';
import Domestic from './Domestic';
import City from './City';
import Svg_SouthMap from '../public/Svg_SouthMap';
import { useRadioGroup } from '@material-ui/core';
import '../public/css/home.css';

class Home extends Component {
  state = { datas: [] };

  componentDidMount() {
    fetch('/Domestic')
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }
  render() {
    return (
      <div className="home_body">
        <h1 className="home_text">코로나 경보</h1>
      </div>
    );
  }
}

export default Home;
