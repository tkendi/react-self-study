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
            <h1>{data.Standard_Time}</h1>
            <p>{data.Seoul.Seoul_num}</p>
            <p>{data.Seoul.Seoul_Increase_num}</p>
            {/* <p>{data.Seoul.Seoul_Increase_num}</p>
            <p>{data.Seoul.Seoul_Dead_num}</p>
            <p>{data.Busan_num}</p>
            <p>{data.Busan_Increase_num}</p>
            <p>{data.Busan_Dead_num}</p>
            <p>{data.Daegu_num}</p>
            <p>{data.Daegu_Increase_num}</p>
            <p>{data.Daegu_Dead_num}</p>
            <p>{data.Incheon_num}</p>
            <p>{data.Incheon_Increase_num}</p>
            <p>{data.Incheon_Dead_num}</p>
            <p>{data.Gwangju_num}</p>
            <p>{data.Gwangju_Increase_num}</p>
            <p>{data.Gwangju_Dead_num}</p>
            <p>{data.Daejeon_num}</p>
            <p>{data.Daejeon_Increase_num}</p>
            <p>{data.Daejeon_Dead_num}</p>
            <p>{data.Ulsan_num}</p>
            <p>{data.Ulsan_Increase_num}</p>
            <p>{data.Ulsan_Dead_num}</p>
            <p>{data.Sejong_num}</p>
            <p>{data.Sejong_Increase_num}</p>
            <p>{data.Sejong_Dead_num}</p> */}
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
