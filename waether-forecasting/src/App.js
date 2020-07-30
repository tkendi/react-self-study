import React from "react";
import data from "./data/data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
    };
  }

  componentDidMount() {
    this.setState({
      weatherData: data
    });

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <header>App</header>
      </div>
    );
  }
}

export default App;
