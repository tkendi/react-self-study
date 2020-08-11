import React from "react";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
