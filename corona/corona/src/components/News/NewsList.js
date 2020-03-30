import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&apiKey=4343d5ea9d6d45e59b8b5cebd36ea2c0',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //loading...
  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }

  //article 값 설정되기 전
  if (!articles) {
    return null;
  }

  //article 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem article={articles.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
