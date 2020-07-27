import React from "react";
import City from "./components/city";
import Number from "./components/numberCard";
import styles from "./styles/App.module.css";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class App extends React.Component {
  state = {
    data: "",
  };

  handleCityChange = async (city) => {
    console.log(city);
    this.setState({
      data: city,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div className={styles.form}>
          <City handleCityChange={this.handleCityChange} />
          <Number city={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
