import React from "react";
import CjDeliver from "./components/cjParsing";
import Input from "./components/numInput";
import styles from "./styles/App.module.css";
import { Typography, AppBar, Toolbar, Paper, Grid } from "@material-ui/core";

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
        <div className={styles.head}>
          <AppBar position="static">
            <Toolbar className={styles.toolBar}>
              <Typography
                variant="h4"
                component="h2"
                noWrap
                gutterBottom
                className={styles.title}
              >
                CJ 택배 조회
              </Typography>
              <Input handleNumberChange={this.handleNumber} />
            </Toolbar>
          </AppBar>
        </div>
        <CjDeliver number={this.state.number} />
      </React.Fragment>
    );
  }
}

export default App;
