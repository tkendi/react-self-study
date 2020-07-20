import React from "react";
import City from "./components/city";
import Number from './components/number'

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
    const numbersData = this.state;
    return (
      <React.Fragment>
        <City handleCityChange={this.handleCityChange} />
        <Number numbers = {numbersData} />
      </React.Fragment>
    );
  }
}

export default App;
