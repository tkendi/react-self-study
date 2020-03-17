import React, { Component } from 'react';
import '../public/css/Domestic.css';

class Domestic extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch('/Domestic')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div class="body">
        <ul>
          {this.state.users.map(user => (
            <div key={user.id} className="accordion">
              <h1>{user.title}</h1>
              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">확진환자</h1>
                </div>
                <p className="text">{user.Confirm}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">격리해제 환자</h1>
                </div>
                <p className="text">{user.Disassociate}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">격리환자</h1>
                </div>
                <p className="text">{user.Quaranines}명</p>
              </div>

              <div className="accordion-item">
                <div className="item-header">
                  <h1 className="domestic_title">사망자</h1>
                </div>
                <p className="text">{user.Dead}명</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Domestic;
