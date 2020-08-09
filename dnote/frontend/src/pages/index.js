import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound } from "pages";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
