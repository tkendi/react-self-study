import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import styles from "./SearchingAppbar.module.css";
import SearchTitle from "../../search/searchTitle";

@observer
class SearchingAppbar extends React.Component {
  state = {
    title: "",
  };

  handleTitle = async (y_title: any) => {
    console.log(y_title);
    this.setState({
      title: y_title,
    });
  };

  render() {
    return (
      <div className={styles.form}>
        <AppBar position="static">
          <Toolbar className={styles.toolBar}>
            <Typography
              variant="h4"
              component="h2"
              noWrap
              gutterBottom
              className={styles.title}
            >
              Youtube Downloader
            </Typography>
            <SearchTitle handleTitleChange={this.handleTitle} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default SearchingAppbar;
