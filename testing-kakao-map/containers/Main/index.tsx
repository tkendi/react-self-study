/*global kakao*/

import React, { useEffect } from "react";
import styled from "styled-components";
declare global {
  interface Window {
    kakao: any;
  }
}

const Main = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=6c41cbb32b2b1f288c5ac08273cb8f50&libraries=LIBRARY";
    document.head.appendChild(script);

    script.onload = () => {
    //   kakao.maps.load(() => {
    //     let container = document.getElementById("map");
    //     let options = {
    //       center: new kakao.maps.LatLng(37.506502, 127.053617),
    //       level: 7,
    //     };

    //     const map = new window.kakao.maps.Map(container, options);
    //   });
    };
  }, []);

  return (
    <React.Fragment>
      <MapContent ref={kakaoMap} id="map" />
    </React.Fragment>
  );
};

export default Main;

const MapContent = styled.div`
  width: 100%;
  height: 100%;
`;
