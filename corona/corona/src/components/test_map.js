import React, { Component } from 'react';

class test_map extends Component {
    componentDidMount() {
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        let map = new kakao.maps.Map(container, options);
    }

  render() {
    return <div id="map" style="width:500px; height:400px;"></div>;
  }
}


export default test_map;