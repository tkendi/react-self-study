import React from "react";
import axios from 'axios'

class App extends React.Component {
    async  componentDidMount() {
        const test = await axios('http://localhost:4000/delivery?number=632234576584')
        console.log(test)
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
