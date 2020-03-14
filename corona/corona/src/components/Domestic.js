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

        <ul>
          {this.state.users.map(user => (
            <div key={user.id}>
              <h1>{user.title}</h1>
              <div>
                <div>
                <h1>확진환자</h1>
                <img class="icon" src="../img/plus.png" />
                </div>
                <p>
                {user.Confirm}명
                </p>
              </div>
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
