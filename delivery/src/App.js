import React from "react";
import CjDeliver from "./components/cjParsing";
import Input from "./components/numInput";
import styles from "./styles/App.module.css";
import { Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    number: 0,
  };

  handleNumber = async (deliverNum) => {
    console.log(deliverNum);
    this.setState({
      number: deliverNum,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" component="h3" align = "center">
          CJ 택배 조회
        </Typography>
        <div className={styles.form}>
          <Input handleNumberChange={this.handleNumber} />
        </div>
        <div>
          <CjDeliver number={this.state.number} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
