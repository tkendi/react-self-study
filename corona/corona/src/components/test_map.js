import React, { Component, Fragment } from 'react';
import '../public/css/test_map.css';

class test_map extends Component {
  componentDidMount() {
    let container = document.getElementById('map');
    let options = {
      center: new window.daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
      level: 5, //지도의 확대 축소
    };
    this.map = new window.daum.maps.Map(container, options);
  }
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
