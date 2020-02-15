import React, { useCallback } from 'react';
import { Link, Route } from 'react-router-dom';
import NewsPage from '../pages/NewsPage';

const Main = () => {
  return (
    <div>
      <header>
        <h3>News</h3>
        <nav>
          <Link to="#">Home</Link>
          <Link to="#">Features</Link>
          <Link to="#">Contact</Link>
        </nav>
      </header>
      <main>
        <h1>News Topic</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          <Link to="/NewsPage">See more</Link>
        </p>
      </main>
    </div>
  );
};

export default Main;
