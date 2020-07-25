import React from "react";
import { cjDataParsing } from "../lib/api/index";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  TableRow,
} from "@material-ui/core";
import styles from "../styles/cj.module.css";

class cjParsing extends React.Component {
  state = {
    time: [],
    location: [],
    description: [],
    state: "",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      const data = await cjDataParsing(this.props.number);
      this.setState({
        time: data.time,
        location: data.location,
        description: data.description,
        state: data.state,
      });
      console.log(this.state);
    }
  }
  render() {
    const { time, location, description } = this.state;
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="delivery-info">
          <TableHead>
            <TableRow>
              <TableCell><Typography>상품단계</Typography></TableCell>
              <TableCell align="right"><Typography>처리일시</Typography></TableCell>
              <TableCell align="right"><Typography>상품상태</Typography></TableCell>
              <TableCell align="right"><Typography>상품위치</Typography></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {time.map((time, i) => (
              <TableRow key={i}>
                <TableCell component="th" scopre="row">
                  {this.state.state}
                </TableCell>
                <TableCell align="right">{time}</TableCell>
                <TableCell align="right">{description[i]}</TableCell>
                <TableCell align="right">{location[i]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default cjParsing;
