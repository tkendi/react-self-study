import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import Home from './Home';
import MoimList from '../containers/MoimList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h1>Mogae, 모임개설</h1>
        </div>
        <div className = "content-wrapper">
          <ul>
            <li><NavLink exact to ="/">홈으로</NavLink></li>
            <li><NavLink to = "/moim">모임으로</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/moim" component={MoimList} />
            <Route exact path = "/" component = {Home} />
          </Switch>
        </div>
      </div>
    )
  }
}