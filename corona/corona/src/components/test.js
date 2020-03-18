import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { palette, spacing } from '@material-ui/system';
import {
  NoSsr,
  Box,
  TableRow,
  TableCell,
  TableHead,
  Table,
  TableBody
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
        {this.state.users.map(user => (
          <Table>
            <TableHead>
              <TableRow key={user.id}>
                <TableCell>확진환자</TableCell>
                <TableCell>격리해제 환자</TableCell>
                <TableCell>격리환자</TableCell>
                <TableCell>사망자</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{user.Confirm}</TableCell>
                <TableCell>{user.Disassociate}</TableCell>
                <TableCell>{user.Quaranines}</TableCell>
                <TableCell>{user.Dead}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ))}
        <div ref={el => (this.el = el)} />
      </div>
    );
  }
}

export default Domestic;
