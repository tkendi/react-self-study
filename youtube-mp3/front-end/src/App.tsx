import React from "react";
import SearchMain from "./components/search/searchMain";

class App extends React.Component {
  render() {
    const { store }: any = this.props;
    return (
      <React.Fragment>
        <SearchMain />
      </React.Fragment>
    );
  }
}

export default App;
