import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { palette, spacing } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';
import test_domestic from './test_domestic';
import {
  TableRow,
  TableCell,
  TableHead,
  Table,
  TableBody,
  Paper,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

class Domestic extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch('/Domestic')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>확진환자</TableCell>
                <TableCell>격리해제 환자</TableCell>
                <TableCell>격리환자</TableCell>
                <TableCell>사망자</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map(data => {
                return (
                  <test_domestic
                    key={data.id}
                    Confirm={data.Confirm}
                    Disassociate={data.Disassociate}
                    Quaranines={data.Quaranines}
                    Dead={data.Dead}
                  />
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Domestic);
