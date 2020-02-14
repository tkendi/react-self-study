import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Countries from '../components/Countries';

const NewsPage = ({ match, compare }) => {
  //카테고리가 선택되지 않으면 기본값으로 all을 사용
  const category = match.params.category || 'all';

  return (
    <>
      <Countries />
        <Categories />
        <NewsList category={category} />
    </>
  );
};

export default NewsPage;
