import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path = "/red" component = {RedPage} />
      <Route path = "/blue" component = {BluePage} />
      <Route path = "/users" component = {UserPage} />
    </div>
  );
};

export default App;
