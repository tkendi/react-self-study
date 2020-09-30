import React from "react";
import SearchingAppbar from "./components/public/Appbar/SearchingAppbar";
import SearchResult from './components/search/searchResult'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchingAppbar />
        <SearchResult />
      </div>
    );
  }
}

export default App;
