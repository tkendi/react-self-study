import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import styles from "./SearchingAppbar.module.css";
import SearchTitle from "../../search/searchTitle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#ff6e40",
    },
    error: {
      main: "#009688",
    },
    text: {
      primary: "#212121",
    },
  },
});

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default SearchingAppbar;
