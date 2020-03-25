import React, { Component, Fragment } from 'react';
import '../public/css/test_map.css';

class test_map extends Component {
  componentWillMount() {
    console.log('kakao map uploading');
  }

  componentDidMount() {
    let Lat = 37.5642135;
    let Lng = 127.0016985;
    let container = document.getElementById('map');
    let options = {
      center: new window.daum.maps.LatLng(Lat, Lng), //지도의 중심좌표
      level: 3, //지도의 확대 축소
    };
    this.map = new window.daum.maps.Map(container, options);
    
    let markerPosition = new window.daum.maps.LatLng(Lat, Lng); //마커가 표시될 위치
    //마커 생성
    let marker = new window.daum.maps.Marker({
      position:markerPosition
    });
    //마커가 지도위에 표시되도록 생성
    marker.setMap(this.map);
  }
  componentShouldMount
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
