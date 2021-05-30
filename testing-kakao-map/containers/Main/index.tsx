import React, { useEffect } from "react";
import styled from "styled-components";

/*global kakao*/

const Main = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    // const script = document.createElement("script");
    // script.async = true;
    // script.src =
    //   "https://dapi.kakao.com/v2/maps/sdk.js?appkey=6c41cbb32b2b1f288c5ac08273cb8f50&libraries=LIBRARY";
    // document.head.appendChild(script);

    // script.onload = () => {
    //   kakao.maps.load(() => {
    //     let container = document.getElementById("map");
    //     let options = {
    //       center: new kakao.maps.LatLng(37.506502, 127.053617),
    //       level: 7,
    //     };

    //     const map = new window.kakao.maps.Map(container, options);
    //   });
    // };

    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <div id="map" style={{  width: 500, height: 500 }}></div>
    </>
  );
};

export default Main;
