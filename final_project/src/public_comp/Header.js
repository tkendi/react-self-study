import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Header = () => {
  return (
    <React.Fragment>
      <Toolbar>
        <Button>
          <Typography>SoonDoll</Typography>
        </Button>
      </Toolbar>
      <Toolbar>
        <Link />
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
