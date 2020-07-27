import React from "react";
import { cjDataParsing } from "../lib/api/index";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
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
      if(!data) {
        return '잘못된 접근입니다'
      }
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
      <div className={styles.form}>
        <TableContainer>
          <Table
            className={styles.table}
            size = "small"
            aria-label="delivery-info"
          >
            <TableHead>
              <TableRow className={styles.tableRow}>
                <TableCell>
                  <Typography align="center" variant="subtitle1" component="h3">
                    상품단계
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography align="center" variant="subtitle1" component="h3">
                    처리일시
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography align="center" variant="subtitle1" component="h3">
                    상품상태
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography align="center" variant="subtitle1" component="h3">
                    상품위치
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {time.map((time, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scopre="row">
                    {this.state.state}
                  </TableCell>
                  <TableCell align="left">{time}</TableCell>
                  <TableCell align="left">{description[i]}</TableCell>
                  <TableCell align="left">{location[i]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default cjParsing;
