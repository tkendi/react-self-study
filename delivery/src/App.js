import React from "react";
import Input from "./components/numInput";
import DeliverName from "./components/deliveryPicker";
import styles from "./styles/App.module.css";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import CjDeliver from './components/cjParsing'

class App extends React.Component {
  state = {
    number: 0,
    name: 0,
  };

  handleNumber = async (deliverNum) => {
    console.log(deliverNum);
    this.setState({
      number: deliverNum,
    });
  };

  handleName = async (deliverName) => {
    console.log(deliverName);
    this.setState({
      name: deliverName,
    });
    console.log(this.state.name);
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
                택배 조회
              </Typography>
              <DeliverName handleNamechange={this.handleName} />
              <Input handleNumberChange={this.handleNumber} />
            </Toolbar>
          </AppBar>
          <Typography>{this.state.name}</Typography>
        </div>
        <CjDeliver number={this.state.number} name = {this.state.name} />
      </React.Fragment>
    );
  }
}

export default App;
