import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Countries from '../components/Country';

const NewsPage = ({match}) => {
    //카테고리가 선택되지 않으면 기본값으로 all로 사용
    const category = match.params.category || 'all';
    const country = match.params.country || 'original';

    return (
        <>
            <Countries />
            <Categories />
            <NewsList category = {category} country = {country} />
        </>
    );
};

export default NewsPage;
