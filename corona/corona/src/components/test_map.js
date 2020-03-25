import React, { Component, Fragment } from 'react';
import '../public/css/test_map.css';

class test_map extends Component {
  componentDidMount() {
    let Lat = 37.5642135;
    let Lng = 127.0016985;
    let container = document.getElementById('map');
    let options = {
      center: new window.daum.maps.LatLng(Lat, Lng), //지도의 중심좌표
      level: 5, //지도의 확대 축소
    };
    this.map = new window.daum.maps.Map(container, options);

    let markerPosition = new window.daum.maps.LatLng(Lat, Lng);
    let marker = new window.daum.maps.Marker({
      position: markerPosition
    });
    marker.setMap(this.map);
  }
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
