import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const countries = [
  {
    name: 'original',
    text: '한국',
  },
  {
    name: 'us',
    text: '미국',
  },
  {
    name: 'jp',
    text: '일본',
  },
  {
    name: 'cn',
    text: '중국',
  },
  {
    name: 'ae',
    text: '아랍에미리트',
  },
  {
    name: 'ar',
    text: '아르헨티나',
  },
];

const CountriesBlock = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 24rem;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Country = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover{
          color: #3bc9db;
      }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Countries = () => {
  return (
    <CountriesBlock>
      {countries.map(c => (
        <Country 
            key={c.name}
            activeClassName = "active"
            exact = {c.name === 'original'}
            to = {c.name === 'original' ? '/kr' : `/${c.name}`}
        >
            {c.text}
        </Country>
      ))}
    </CountriesBlock>
  );
};

export default Countries;
