import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    margin: '0 auto'
  },
  toolbarText: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }
}));

function handleClick(e) {
  e.preventDefault();
  alert('login please')
  console.log('Tlqkf')
}



const Header = props => {
  const classes = useStyles();
  const { title, sections, site_pos } = props;
  return (
    <>
      {/* 아랫쪽 메인 margin */}
      <Toolbar className={classes.toolbar}>
        <Button size="small" href="/">
          {' '}
          {title}{' '}
        </Button>
        <div className={classes.toolbarLink}>
          {sections.map((section) => (
            <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarText}
            onClick={handleClick}
            >
            {section.title}
            </Link>
          ))}
        </div>
        {site_pos !== 'main' && (
          <Button size="small" href="/login">
            Sign in
          </Button>
        )}
      </Toolbar>
    </>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default Header;


