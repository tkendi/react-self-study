import React from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import Header from '../public_comp/Header';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const sections = [
  { title: 'Streaming', url: '#' },
  { title: 'Board', url: '#' },
  { title: 'My Page', url: '#' },
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
});

const useStyles = makeStyles((theme) => ({
  margin: {
    primary: theme.spacing(1),
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header title="SoonDoll" sections={sections} />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Button>Sign In</Button>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
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
