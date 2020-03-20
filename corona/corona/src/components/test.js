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
      this.callApi()
        .then(res => this.setState({ datas:res }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/City');
      const body = await response.json();
      return body;
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
            {this.state.datas ? this.state.datas.map(data => {
              <div key = {data.id}>
                {data.Seoul}
              </div>
            }): ""}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default test;