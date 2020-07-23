import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:4000/api")
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
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
