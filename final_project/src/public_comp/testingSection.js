import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
    margin: '0 auto',
  },
  toolbarText: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
}));

class testingSection extends React.Component {
  render() {
    const classes = useStyles();
    const { title, sections } = this.state.prop;
    return (
      <React.Fragment>
        {/* 아랫쪽 메인 margin */}
        <Toolbar>
          <Button size="small" href="/">
            {' '}
            {title}{' '}
          </Button>
          <div className={classes.toolbarLink}>
            {/* float = "right" 오른쪽 정렬 처리 */}
            {sections.map((section) => (
              <Link
                color="inherit"
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarText}
              >
                {section.title}
              </Link>
            ))}
          </div>
          <Button size="small" href="/login">
            Sign in
          </Button>
        </Toolbar>
      </React.Fragment>
    );
  }
}

testingSection.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default testingSection;
