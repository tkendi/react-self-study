import React from "react";
import City from "./components/city";
//import Number from './components/number'

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
        <City handleCityChange={this.handleCityChange} />
        {/* <Number numbers = {this.state.data} /> */}
      </React.Fragment>
    );
  }
}

export default App;
