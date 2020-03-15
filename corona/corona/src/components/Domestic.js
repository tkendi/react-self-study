import React, { Component } from 'react';
import '../public/css/Domestic.css';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class Domestic extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch('/Domestic')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <div key={user.id} class="accordion">
              <h1>{user.title}</h1>
              <div class="accordion-item">
                <div class="item-header">
                  <h1 class = "title">확진환자</h1>
                  <img class = "icon" src = "../public/img/plus.png"></img>
                </div>
                <p class="text">{user.Confirm}명</p>
              </div>

              <div class="accordion-item">
                <div class="item-header">
                </div>
                <p class="text">{user.Disassociate}명</p>
              </div>
              
              <div class="accordion-item">
                <div class="item-header">
                </div>
                <p class="text">{user.Quaranines}명</p>
              </div>

              <div class="accordion-item">
                <div class="item-header">
                </div>
                <p class="text">{user.Dead}먕</p>
              </div>
              
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Domestic;
