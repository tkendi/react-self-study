import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import Appbar from '../public_comp/Appbar';

const Main = () => {
  return (
    <div>
      <CssBaseline />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Aniamls Life
      </Typography>
    </div>
  );
};

export default Main;
