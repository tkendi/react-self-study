import React from 'react';
import LoginPage from './Web_page/Login'
import RegisterPage from './Web_page/Register'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route component = {LoginPage} path = './Web_page/Login' />
      <Route component = {RegisterPage} path = './Web_page/Register' />
    </>
  )
}

export default App;
