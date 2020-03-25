import React, { Component, Fragment } from 'react';
import '../public/css/test_map.css';

class test_map extends Component {
  componentWillMount() {
    console.log('kakao map testing');
  }

  // componentDidMount() {
  //   let Lat = 37.5642135;
  //   let Lng = 127.0016985;
  //   let container = document.getElementById('map');
  //   let options = {
  //     center: new window.daum.maps.LatLng(Lat, Lng), //지도의 중심좌표
  //     level: 3, //지도의 확대 축소
  //   };
  //   this.map = new window.daum.maps.Map(container, options);
    
  //   let markerPosition = new window.daum.maps.LatLng(Lat, Lng); //마커가 표시될 위치
  //   //마커 생성
  //   let marker = new window.daum.maps.Marker({
  //     position:markerPosition
  //   });
  //   //마커가 지도위에 표시되도록 생성
  //   marker.setMap(this.map);
  // }

  componentDidMount() {

    let Lat = 37.5642135;
    let Lng = 127.0016985;

    let map = new window.kakao.maps.Map(document.getElementById('map'), {
      center: new window.kakao.maps.LatLng(Lat, Lng),
      level: 14
    });

    //마커 클러스터러 생성
    const cluster = new window.kakao.maps.MarkerClusterer({
      map: map, //마커들을 관리하고 표시할 지도
      averageCenter: true,  //클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10  //클러스트 할 최소 지도 레벨
    });

    this.$.get('/download/web/data/chicken.json', function(data) {
      let markers = this.$(data.position).map(function(i, position) {
        return new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(position.lat, position.lng)
        });
      });
      cluster.addMarkers(markers);
    })
  }
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
