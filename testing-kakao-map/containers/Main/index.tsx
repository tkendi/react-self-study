import React, { useEffect, useState } from "react";
import styled from "styled-components";

/*global kakao*/

const Main = () => {
  const [position, setPosition] = useState<any>({});

  const createMap = () => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(position.lat, position.lon), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  };

  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setPosition({ lat, lon });
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
          {/* <CategoryList id="BK9" data-order="0">
            <span className="category_bg bank"></span>
            은행
          </CategoryList>
          <CategoryList id="MT1" data-order="1">
            <span className="category_bg mart"></span>
            마트
          </CategoryList>
          <CategoryList id="PM9" data-order="2">
            <span className="category_bg pharmacy"></span>
            약국
          </CategoryList>
          <CategoryList id="OL7" data-order="3">
            <span className="category_bg oil"></span>
            주유소
          </CategoryList>
          <CategoryList id="CE7" data-order="4">
            <span className="category_bg cafe"></span>
            카페
          </CategoryList>
          <CategoryList id="CS2" data-order="5">
            <span className="category_bg store"></span>
            편의점
          </CategoryList> */}
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

const Category = styled.ul`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
`;

const CategoryList = styled.li`
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 3px;
  text-align: center;
  cursor: pointer;
`;
