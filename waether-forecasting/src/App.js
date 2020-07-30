import React from "react";
import data from './data/data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
    };
  }

  render() {
    const list = Array.from(data).map((data, i) =>{
      return (
        <li key = {i}>
          {data}
        </li>
      )
    } )
    return (
      <div>
        <header>App</header>
        {list}
      </div>
    );
  }
}

export default App;
