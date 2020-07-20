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
    const city = this.state;
    return (
      <React.Fragment>
        <City handleCityChange={this.handleCityChange} />
        <Number city = {city} />
      </React.Fragment>
    );
  }
}

export default App;
