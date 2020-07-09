import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Toolbar, Link } from '@material-ui/core';
import '../styles/css/Header.scss';

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
  },
  btn_style: {
    borderRadius: '5rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem'
  },
  text_style: {
    margin: '1rem'
  }
}));

function handleClick(e) {
  e.preventDefault();
  alert('login please');
  console.log('click success');
}

function typo_data(sections) {
  sections.map(section => (
    <Typography
      color="inherit"
      key={section.title}
      variant="body2"
      href={section.url}
      className="section_text"
      onClick={handleClick}
    >
      {section.title}
    </Typography>
  ));
}

const Header = props => {
  const classes = useStyles();
  const { title, sections, site_pos } = props;
  return (
    <div>
      {/* 아랫쪽 메인 margin */}
      <Toolbar className={classes.toolbar}>
        <Button size="small" href="/">
          {title}
        </Button>
        <div className={classes.toolbarLink}>
          {sections.map(section => (
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

          {site_pos === 'login' && typo_data(sections)}
          {site_pos === 'register' && typo_data(sections)}
        </div>
        {site_pos === 'login' && (
          <>
            <Typography
              variant="body2"
              component="h3"
              color="primary"
              className={classes.text_style}
            >
              아직 회원이 아니신가요?
            </Typography>
            <Button
              href="/register"
              variant="outlined"
              color="primary"
              className={classes.btn_style}
            >
              SIGN UP
            </Button>
          </>
        )}
        {site_pos === 'register' && (
          <>
            <Typography
              variant="body2"
              component="h3"
              color="primary"
              className={classes.text_style}
            >
              이미 회원이신가요?
            </Typography>
            <Button
              href="/login"
              variant="outlined"
              color="primary"
              className={classes.btn_style}
            >
              SIGN IN
            </Button>
          </>
        )}
      </Toolbar>
    </div>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
  site_pos: PropTypes.string
};

export default Header;
