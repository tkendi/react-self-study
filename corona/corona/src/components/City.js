import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class City extends Component {

  state = { datas: [] };

  componentDidMount() {
    fetch('/City')
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }

  render() {
    return (
      <div>
        {this.state.datas.map(data => (
          <div>
            {data.Standard_Time}
          </div>
        ))}
      </div>


      // <TableRow>
      //   <TableCell>{this.props.Seoul_num}</TableCell>
      //   <TableCell>{this.props.Seoul_increase}</TableCell>
      //   <TableCell>{this.props.Seoul_dead}</TableCell>
      //   <TableCell>{this.props.Busan_num}</TableCell>
      //   <TableCell>{this.props.Busan_increase}</TableCell>
      //   <TableCell>{this.props.Busan_dead}</TableCell>
      //   <TableCell>{this.props.Daegu_num}</TableCell>
      //   <TableCell>{this.props.Daegu_increase}</TableCell>
      //   <TableCell>{this.props.Daegu_dead}</TableCell>
      //   <TableCell>{this.props.Incheon_num}</TableCell>
      //   <TableCell>{this.props.Incheon_increase}</TableCell>
      //   <TableCell>{this.props.Incheon_dead}</TableCell>
      //   <TableCell>{this.props.Gwangju_num}</TableCell>
      //   <TableCell>{this.props.Gwangju_increase}</TableCell>
      //   <TableCell>{this.props.Gwangju_dead}</TableCell>
      //   <TableCell>{this.props.Daejeon_num}</TableCell>
      //   <TableCell>{this.props.Daejeon_increase}</TableCell>
      //   <TableCell>{this.props.Daejeon_dead}</TableCell>
      //   <TableCell>{this.props.Ulsan_num}</TableCell>
      //   <TableCell>{this.props.Ulsan_increase}</TableCell>
      //   <TableCell>{this.props.Ulsan_dead}</TableCell>
      //   <TableCell>{this.props.Sejong_num}</TableCell>
      //   <TableCell>{this.props.Sejong_increase}</TableCell>
      //   <TableCell>{this.props.Sejong_dead}</TableCell>
      // </TableRow>
    );
  }
}

export default City;
