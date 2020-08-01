import React from "react";
import CjDeliver from "./components/cjParsing";
import Input from "./components/numInput";
import styles from "./styles/App.module.css";
import {
  Typography,
  AppBar,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { deliveryName } from "./lib/api/";

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

  async componentDidMount() {
    const data = await deliveryName();
    console.log(data);
  }

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
              <FormControl>
                <InputLabel>Delivery</InputLabel>
                <Select>
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
              <Input handleNumberChange={this.handleNumber} />
            </Toolbar>
          </AppBar>
        </div>
        {/* <CjDeliver number={this.state.number} /> */}
      </React.Fragment>
    );
  }
}

export default App;
