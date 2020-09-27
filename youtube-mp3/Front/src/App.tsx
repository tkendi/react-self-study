import React from "react";
import { Typography } from "@material-ui/core";
import SearchTitle from "./components/search/searchTitle";
import SearchingAppbar from "./components/public/Appbar/SearchingAppbar";

class App extends React.Component {
  state = {
    title: ""
  }

  handleTitle = async (y_title: any) => {
    console.log(y_title)
    this.setState({
      title: y_title
    })
  }

  render() {
    return (
      <div>
        <SearchingAppbar />
        <SearchTitle handleTitle = {this.handleTitle} />
      </div>
    );
  }
}

export default App;
