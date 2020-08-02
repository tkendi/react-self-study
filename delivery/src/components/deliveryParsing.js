import React from "react";
import { deliverDataParsing, deliveryInfo } from "../lib/api/index";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  MenuItem,
} from "@material-ui/core";
import styles from "../styles/deliveryParsing.module.css";

class deliveryParsing extends React.Component {
  state = {
    time: [],
    location: [],
    description: [],
    state: "",
    code: 0,
    url: "de.dhl",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      const deliverCode = await deliveryInfo();
      console.log(deliverCode.code);
      deliverCode.code.map((code, index) => {
        if (this.props.name === index) {
          this.setState({
            url: deliverCode.code[index],
          });
        }
      });
      console.log(this.state.url);
    }
    if (prevProps.number !== this.props.number) {
      console.log(this.props.number);
      const parsing = await deliverDataParsing(
        this.state.url,
        this.props.number
      );
      this.setState({
        time: parsing.time,
        description: parsing.description,
        location: parsing.location,
        state: parsing.state,
      });
    }
  }

  render() {
    const { time, location, description } = this.state;
    return (
      <Paper className={styles.form}>
        <TableContainer>
          <Table size="small" aria-label="delivery-info" padding="default">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" component="h3">
                    상품단계
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" component="h3">
                    처리일시
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" component="h3">
                    상품상태
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" component="h3">
                    상품위치
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {time.map((time, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scopre="row" className={styles.row}>
                    <Typography variant="body1">{this.state.state}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2">{time}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{description[i]}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{location[i]}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

export default deliveryParsing;
