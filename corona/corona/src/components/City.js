import React, { Component } from "react";

class Corona extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/Domestic")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h1>국내 현황</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <p>{user.title}</p>
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

export default Corona;