import React from 'react';
import Appbar from '../public_comp/Appbar';
import Weather from '../api_parsing';
import { CssBaseline, Container } from '@material-ui/core';
import '../styles/css/Main.scss'

const Main = () => {
  return (
    <React.Fragment>
      <Appbar />
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
