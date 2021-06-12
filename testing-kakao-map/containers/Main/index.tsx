import React, { useEffect, useState } from "react";
import styled from "styled-components";

/*global kakao*/

const Main = () => {
  const [position, setPosition] = useState<any>({});
  const [accurancy, setAccurancy] = useState(0);

  const createMap = () => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    // 마커가 표시될 위치
    var markerPosition = new kakao.maps.LatLng(
      position.lat + 0.021598,
      position.lon - 0.002065
    );

    // 이미지 지도에 표시할 마커입니다
    // 이미지 지도에 표시할 마커는 Object 형태입니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(
        position.lat + 0.021598,
        position.lon - 0.002065
      ), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    // 37.552609, 126.945035

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커 생성
    marker.setMap(map);
    searchCategoy(map);
  };

  const searchCategoy = (map: any) => {
    //마커를 클릭하면 장소명 표시 윈도우
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    //장소 검색 개체생성
    // const ps = new kakao.maps.services?.Places(map);
    // console.log(ps);

    //카테고리 검색 후 콜백
    function placesSearchCB({ data, status, pagination }: any) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    //마커 보이는 콜백
    function displayMarker(place: any) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }

    // ps.categorySearch("FD6", placesSearchCB, { useMapBounds: true });
    // console.log(kakao);
  };

  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setPosition({ lat, lon });
          setAccurancy(pos.coords.accuracy);
        },
        () => console.log("error")
      );
    } else {
      console.log("위치정보 사용 불가능");
    }
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  useEffect(() => {
    createMap();
  }, [position]);

  return (
    <>
      <MapWrap>
        <Map id="map" />
        <Category>
          {accurancy > 5 && <p>{accurancy}m 정도 떨어져 있습니다.</p>}
        </Category>
      </MapWrap>
    </>
  );
};

export default Main;

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: 20px;
  left: 45%;
  padding: 0px;
  border-radius: 5px;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.56);
  background: rgba(230, 230, 230, 0.9);
  > p {
    padding: 5px;
    font-size: 12px;
  }
`;
