import React from "react";
import City from "./components/city";

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
      <div>
        <Number 
        <City handleCityChange={this.handleCityChange} />
      </div>
    );
  }
}

export default App;
