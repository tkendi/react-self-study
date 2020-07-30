import React from "react";
import data from "../data/data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: data,
    };
  }

  render() {
    const list = this.state.weatherData.map((d) => <li>{d}</li>);
    return (
      <div>
        <header>{list}</header>
      </div>
    );
  }
}

export default App;
