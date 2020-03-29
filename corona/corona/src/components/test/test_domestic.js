import React, { Component } from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class test_domestic extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.Confirm}</TableCell>
        <TableCell>{this.props.Disassociate}</TableCell>
        <TableCell>{this.props.Quaranines}</TableCell>
        <TableCell>{this.props.Dead}</TableCell>
      </TableRow>
    );
  }
}

export default test_domestic;
