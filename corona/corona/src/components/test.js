import React, {Component} from 'react';
import City from './City';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class test extends Component {
  state = { datas: [] };

  componentDidMount() {
    fetch('/City')
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>도시</TableCell>
              <TableCell>확진자</TableCell>
              <TableCell>증가환자</TableCell>
              <TableCell>사망자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.datas.map(data => {
              return <City Seoul_num = {data.Seoul_num} Seoul_increase = {data.Seoul_Increase} Seoul_dead = {data.Seoul_Dead} Busan_num = {data.Busan_num} Busan_increase = {data.Busan.Increase} Busan_dead = {data.Busan_Dead} Daegu_num = {data.Daegu_num} Daegu_increase = {data.Daegu_Increase} Daegu_dead = {Daegu_Dead} Incheon_num = {data.Incheon_num} Incheon_increase = {data.Incheon_Increase} Incheon_dead = {data.Incheon_Dead} Gwangju_num = {data.Gwangju_num} Gwangju_increase = {data.Gwangju_Increase} Gwangju_dead = {data.Gwangju_Dead} Daejeon_num = {data.Daejeon_num} Daejeon_increase = {data.Daejeon_Increase} Daejeon_dead = {data.Daejeon_Dead} Ulsan_num = {data.Ulsan_num} Ulsan_increase = {data.Ulsan_Increase} Ulsan_dead = {data.Ulsan_Dead} Sejong_num = {data.Sejong_num} Sejong_increase = {data.Sejong_Increase} Sejong_dead = {data.Sejong_Dead} />
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}