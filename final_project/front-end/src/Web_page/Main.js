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
  MuiButton: {
    text: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
  backImg: {
    backgroundImage: 'url(https://source.unsplash.com/random)'
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    primary: theme.spacing(1),
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
