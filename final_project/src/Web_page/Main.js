import React from 'react';
import Weather from '../api_parsing';
import { CssBaseline, Container } from '@material-ui/core';
import Header from '../public_comp/Header'

const sections = [
  {title: 'Streaming', url: '#'},
  {title: 'Board', url: '#'},
  {title: 'My Page', url: '#'}
]

const Main = () => {
  return (
    <React.Fragment>
      <Header title="SoonDoll" sections = {sections} />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Weather />
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Main;
