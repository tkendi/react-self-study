import React, { Component, Fragment } from 'react';
import '../../public/css/test_map.css';
import $ from 'jquery';
window.$ = window.jQuery = jQuery

class test_map extends Component {
  componentWillMount() {
    console.log('kakao map testing');
  }

  // componentDidMount() {
  //   let Lat = 37.5642135;
  //   let Lng = 127.0016985;
  //   let address = '서울특별시 강남구 언주로211';
  //   let container = document.getElementById('map');
  //   let options = {
  //     center: new window.kakao.maps.LatLng(Lat, Lng), //지도의 중심좌표
  //     level: 14, //지도의 확대 축소
  //   };
  //   let map = new window.kakao.maps.Map(container, options);

  //   let geocoder = new window.kakao.maps.services.Geocoder();
  //   geocoder.addressSearch(address, function(
  //     result,
  //     status,
  //   ) {
  //     if (status === window.kakao.maps.services.Status.OK) {
  //       let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

  //       let marker = new window.kakao.maps.Marker({
  //         map: map,
  //         position: coords,
  //       });

  //       let infowindow = new window.kakao.maps.InfoWindow({
  //         content:
  //         '<div style="width:150px;text-align:center;padding:6px 0;">중앙병원</div>',
  //       });
  //       infowindow.open(map, marker);

  //       map.setCenter(coords);
  //     }
  //   });
  // }

  componentDidMount() {
    let Lat = 37.5642135;
    let Lng = 127.0016985;

    let container = document.getElementById('map')
    let options = {
      center: new window.kakao.maps.LatLng(Lat, Lng),
      level: 14
    }

    let map = new window.kakao.maps.Map(container, options) 
    let geocoder = new window.kakao.maps.services.Geocoder();
    let clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10    //클러스트 할 최소 지도 레벨
    });

    $.get("../../public/files/hospital_address.json", function(data) {
      let address = $(data.hospital).map(function(i, position){
        return (
          geocoder.addressSearch(position.address, (result, status) => {
            if(status === window.kakao.maps.services.Status.OK) {
              let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

              let marker = new window.kakao.maps.Marker({
                map: map,
                position: coords
              });
            }
          })
        )
      })
    })
  }
  render() {
    return <div className="test_map" id="map"></div>;
  }
}

export default test_map;
