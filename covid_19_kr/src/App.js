import React from "react";
import City from "./components/city";
import Number from "./components/numberCard";
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
        <h1>COVID-19</h1>
        <City handleCityChange={this.handleCityChange} />
        <Number city={this.state.data} />
      </div>
    );
  }
}

export default App;
