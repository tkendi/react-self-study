import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {" "}
              <h1>{user.title}</h1>
              <p>{user.Confirm}</p>
              <p>{user.Disassociate}</p>
              <p>{user.Dead}</p>
              <p>{user.Inspection}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
