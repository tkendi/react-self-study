import React from 'react';
import LoginPage from './Web_page/Login';
import RegisterPage from './Web_page/Register';
import MainPage from './Web_page/Main';
import StreamingPage from './Web_page/Streaming';
import NoticeBoardPage from './Web_page/NoticeBoard';
import { Route } from 'react-router-dom';
import Appbar from './public_comp/Appbar';

function App() {
  return (
    <>
      <Appbar />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={StreamingPage} path="/Streaming" />
      <Route component={NoticeBoardPage} path="/NoticeBoard" />
      <Route component={MainPage} path="/main" />
    </>
  );
}

export default App;
