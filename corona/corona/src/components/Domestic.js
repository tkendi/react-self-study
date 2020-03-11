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
              <p>{user.title}</p>
              <p>{user.Confirm}</p>
              <p>{user.Disassociate}</p>
              <p>{user.Dead}</p>
              <p>{user.Inspection}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Domestic;
