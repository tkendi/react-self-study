import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Route path = {[ '/:country?', '/:category?' ]} component = {NewsPage} />
    </>
  );
};

export default App;
