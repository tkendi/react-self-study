import React from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import Header from '../public_comp/Header';
import {
  createMuiTheme,
  withStyles,
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
      main: '#ffeb3b'
    }
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
              size='large'
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
