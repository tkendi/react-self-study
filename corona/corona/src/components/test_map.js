import React, { Component, Fragment } from 'react';
import '../public/css/test_map.css';

class test_map extends Component {

    // positions: [
    //   {
    //     "lat": 37.27943075229118,
    //     "lng": 127.01763998406159
    //   },
    //   {
    //     "lat": 37.55915668706214,
    //     "lng": 126.92536526611102
    //   },
    //   {
    //     "lat": 35.13854258261161,
    //     "lng": 129.1014781294671
    //   },
    //   {
    //     "lat": 37.55518388656961,
    //     "lng": 126.92926237742505
    //   },
    //   {
    //     "lat": 35.20618517638034,
    //     "lng": 129.07944301057026
    //   },
    //   {
    //     "lat": 37.561110808242056,
    //     "lng": 126.9831268386891
    //   },
    //   {
    //     "lat": 37.86187129655063,
    //     "lng": 127.7410250820423
    //   },
    //   {
    //     "lat": 37.47160156778542,
    //     "lng": 126.62818064142286
    //   },
    //   {
    //     "lat": 35.10233410927457,
    //     "lng": 129.02611815856181
    //   },
    //   {
    //     "lat": 35.10215562270429,
    //     "lng": 129.02579793018205
    //   },
    //   {
    //     "lat": 35.475423012251106,
    //     "lng": 128.76666923366042
    //   },
    //   {
    //     "lat": 35.93282824693927,
    //     "lng": 126.95307628834287
    //   },
    //   {
    //     "lat": 36.33884892276137,
    //     "lng": 127.393666019664
    //   },
    //   {
    //     "lat": 37.520412849636,
    //     "lng": 126.9742764161581
    //   },
    //   {
    //     "lat": 35.155139675209675,
    //     "lng": 129.06154773758374
    //   }
    // ];
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
      level: 13, 
    });

    //마커 클러스터러 생성
    const cluster = new window.kakao.maps.MarkerClusterer({
      map: map, //마커들을 관리하고 표시할 지도
      averageCenter: true, //클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, //클러스트 할 최소 지도 레벨
    });

    let markers = function(i, position) {
      return new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(Lat, Lng),
      });
    };
    cluster.addMarkers(markers);
  }
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
