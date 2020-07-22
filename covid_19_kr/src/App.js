import React from "react";
import City from "./components/city";
import Number from "./components/number";
import styles from "./styles/App.module.css";

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
      <div className={styles.form}>
        <Number city={this.state.data} />
        <City handleCityChange={this.handleCityChange} />
      </div>
    );
  }
}

export default App;
