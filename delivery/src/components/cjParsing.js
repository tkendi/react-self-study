import React from "react";
import { cjDataParsing, deliveryInfo } from "../lib/api/index";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@material-ui/core";
import styles from "../styles/cj.module.css";

class cjParsing extends React.Component {
  state = {
    time: [],
    location: [],
    description: [],
    state: "",
    code: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      const deliverCode = await deliveryInfo();
      console.log(deliverCode.code)
      deliverCode.code.map((code, index) => {
        if(this.props.name === index) {
          console.log(code)
        }
      })
    }
  }

  render() {
    const { time, location, description } = this.state;
    return (
      // <Paper className={styles.form}>
      //   <TableContainer>
      //     <Table size="small" aria-label="delivery-info" padding="default">
      //       <TableHead>
      //         <TableRow>
      //           <TableCell>
      //             <Typography variant="subtitle1" component="h3">
      //               상품단계
      //             </Typography>
      //           </TableCell>
      //           <TableCell align="center">
      //             <Typography variant="subtitle1" component="h3">
      //               처리일시
      //             </Typography>
      //           </TableCell>
      //           <TableCell align="center">
      //             <Typography variant="subtitle1" component="h3">
      //               상품상태
      //             </Typography>
      //           </TableCell>
      //           <TableCell align="center">
      //             <Typography variant="subtitle1" component="h3">
      //               상품위치
      //             </Typography>
      //           </TableCell>
      //         </TableRow>
      //       </TableHead>

      //       <TableBody>
      //         {time.map((time, i) => (
      //           <TableRow key={i}>
      //             <TableCell component="th" scopre="row">
      //               {this.state.state}
      //             </TableCell>
      //             <TableCell align="center">{time}</TableCell>
      //             <TableCell align="center">{description[i]}</TableCell>
      //             <TableCell align="center">{location[i]}</TableCell>
      //           </TableRow>
      //         ))}
      //       </TableBody>
      //     </Table>
      //   </TableContainer>
      // </Paper>

      <div>
        <Typography>App</Typography>
     </div>
    );
  }
}

export default cjParsing;
