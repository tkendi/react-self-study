import React from "react";
import { Typography } from "@material-ui/core";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import * as searching from "../lib/api/searching";

class search extends React.Component {
  URL: any = "viva la vida";
  state = {
    link: [],
    title: [],
  };

  async componentDidMount() {
    const data = await searching.search(this.URL);

    console.log(data.data.data);
    this.setState({
      link: data.data.link,
      title: data.data.title,
    });
  }

  parsing = () => {
    const { link, title } = this.state;
    console.log(link, title);
    return (
      <React.Fragment>
        {link.map((res, i) => {
          return <Typography>{res}</Typography>;
        })}
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <Typography>searching Test</Typography>
        <button onClick={this.parsing}>Click</button>
      </div>
    );
  }
}

decorate(search, {
  URL: observable,
  parsing: action,
});

export default observer(search);
