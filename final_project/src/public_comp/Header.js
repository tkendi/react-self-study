import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import '../styles/css/Header.scss'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    float: "right"
  },
  toolbarText: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { title, sections } = props;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small"> {title} </Button>
        <div className = {classes.toolbarLink}>
          {sections.map((section) => (
            <Link
              color="inherit"
              key={section.title}
              variant="body2"
              href={section.url}
              className = {classes.toolbarText}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;
