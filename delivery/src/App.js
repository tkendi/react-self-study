import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch(`http://localhost:4000/delivery?number=632234576584`).
    then((res) => console.log(res.json()));
  }
  render() {
    return <div>App</div>;
  }
}

export default App;
