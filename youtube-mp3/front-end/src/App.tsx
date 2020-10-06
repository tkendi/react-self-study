import React from "react";
import SearchingAppbar from "./components/public/Appbar/SearchingAppbar";
import SearchResult from "./components/search/searchResult";

class App extends React.Component {
  handleTitle = async (search_title: any) => {
    console.log(search_title);
  };

  render() {
    return (
      <div>
        <SearchingAppbar handleChangeSearch = {this.handleTitle} />
        <SearchResult />
      </div>
    );
  }
}

export default App;
