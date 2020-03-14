import React, { Component } from "react";

class Domestic extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/Domestic")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <div key={user.id}>
              <h1>{user.title}</h1>
              <p>{user.Confirm}</p>
              <p>{user.Disassociate}</p>
              <p>{user.Quaranines}</p>
              <p>{user.Dead}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Domestic;
