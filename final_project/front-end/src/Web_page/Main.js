import React from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import Header from '../public_comp/Header';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const sections = [
  { title: 'Streaming', url: '/' },
  { title: 'Board', url: '/' },
  { title: 'My Page', url: '/' },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffeb3b',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    primary: theme.spacing(1),
    width: '10rem',
    height: '3rem',
    alignItems: 'center'
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <React.Fragment className={classes.backImg}>
      <Header title="SoonDoll" sections={sections} site_pos='main'/>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Button href = "/login">Sign IN</Button>
          <ThemeProvider theme={theme}>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              className={classes.margin}
              href="/register"
            >
              Sign Up
            </Button>
          </ThemeProvider>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Main;
