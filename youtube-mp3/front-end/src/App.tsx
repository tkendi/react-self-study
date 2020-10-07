import React from "react";
import { toJS } from "mobx";
import { inject } from "mobx-react";
import SearchingAppbar from "./components/public/Appbar/SearchingAppbar";

@inject("store")
class App extends React.Component {
  handleTitle = async (search_title: any) => {
    console.log(search_title);
  };

  render() {
    const { store }: any = this.props;
    console.log(toJS(store));
    return (
      <div>
        <SearchingAppbar handleChangeSearch={this.handleTitle} />
      </div>
    );
  }
}

export default App;
