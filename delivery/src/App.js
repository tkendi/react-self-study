import React from "react";
import {cjParsing} from './lib/index'

class App extends React.Component {
    async componentDidMount() {
        const data = await cjParsing();
        console.log(data)
    }
  render() {
      const username = this.state;
    return (
      <div>
        <header>{username ? `Hello ${username}` : "Hello World"}</header>
      </div>
    );
  }
}

export default App;
