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
    return (
      <React.Fragment>
        <Number numbers = {this.state.data} />
        <City handleCityChange={this.handleCityChange} />
      </React.Fragment>
    );
  }
}

export default App;
