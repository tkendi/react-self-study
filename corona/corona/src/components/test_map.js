import React, { Component, Fragment } from 'react';
import MapContext, { KaKaoMap, withJs, withKakaoMap, KakaoMap } from 'react-kakaomap-api';

const Kakao = withJs(
  `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
    process.env.REACT_APP_KAKAO_API_KEY
  }&libraries=services,clusterer,drawing&autoload=false`
)(withKakaoMap(KakaoMap));

function test_map() {
  return (
    <div>
      <Kakao options={{ lng: 11.3456, lat: 123.45678, level: 4 }} />
    </div>
  )
}

export default test_map;
