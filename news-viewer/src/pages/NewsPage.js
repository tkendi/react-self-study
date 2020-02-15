import React from 'react';
import NewsList from '../components/NewsList';
import Countries from '../components/Countries';

const NewsPage = ({ match }) => {
  //카테고리가 선택되지 않으면 기본값으로 all을 사용
  const country = match.params.country || 'original';

  return (
    <>
      <Countries />
      <NewsList country={country} />
    </>
  );
};

export default NewsPage;
