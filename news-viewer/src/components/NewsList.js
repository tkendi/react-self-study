import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import CircularDeterminate from '../public/CircularDeterminate';
import TableCell from '@material-ui/core/TableCell';
import Error from '../public/Error';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }     
`;

const NewsList = ({ country, category }) => {
  const [loading, response, error] = usePromise(
    () => {
      const query = country === 'original' ? '' : `country=${country}`;
      const param = category === 'all' ? '' : `&category=${category}`;
      return axios.get(
        `https://newsapi.org/v2/top-headlines?${query}${param}&apiKey=4343d5ea9d6d45e59b8b5cebd36ea2c0`,
      );
    },
    [country],
    [category],
  );

  //대기 중일 때
  if (loading) {
    return (
      <NewsListBlock>
        <TableCell align="center" colspan="6">
          <CircularDeterminate />
        </TableCell>
      </NewsListBlock>
    );
  }

  //아직 response 값이 설정되지 않았을 때
  if (!response) {
    return <NewsListBlock>response 값이 설정되지 않았습니다</NewsListBlock>;
  }

  //에러가 발생
  if (error) {
    return (
      <Error /> 
    )      
  }

  //response값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
