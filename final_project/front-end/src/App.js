import React from 'react';
import LoginPage from './Web_page/Login';
import RegisterPage from './Web_page/Register';
import MainPage from './Web_page/Main';
import StreamingPage from './Web_page/Streaming';
import NoticeBoardPage from './Web_page/NoticeBoard';
import MyPage from './Web_page/myPage'
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={StreamingPage} path="/Streaming" />
      <Route component={NoticeBoardPage} path="/NoticeBoard" />
      <Route component={MyPage} path = "/myPage" />
      <Route component={MainPage} path="/" exact={true} />
    </>
  );
}

export default App;
