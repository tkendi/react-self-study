import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://www.gvi.co.uk/wp-content/uploads/sites/10/2016/08/21700981574_8177bcd6bb_o-limpopo-1024x512.jpg)',
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const Postfeatured = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost}>
        {<img style={{display: 'none'}} src = 'https://www.gvi.co.uk/wp-content/uploads/sites/10/2016/08/21700981574_8177bcd6bb_o-limpopo-1024x512.jpg' alt = 'Animals img' />}
        <div className = {classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className = {classes.mainFeaturedPostContent}>
              <Typography component = "h1" variant = "h3" color = "inherit" gutterBottom>Weahter is</Typography>
              <Typography variant = "h5" color = "inherit" paragraph>weahter</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default Postfeatured;
