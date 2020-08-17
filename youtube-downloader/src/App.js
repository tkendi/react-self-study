import React from "react";
import { Typography, Button } from "@material-ui/core";
import styles from "./App.module.css";
import * as searchAPI from "./lib/api/search";
import Search from "./components/pages/Search";
import SearchContainer from "./containers/Search/SearchContainer";

class App extends React.Component {
  render() {
    return (
      <div className={styles.form}>
        {/* <Typography variant="h4" className={styles.head} noWrap gutterBottom>
          Youtube Downloader
        </Typography>
        <input
          className={styles.URLInput}
          placeholder="https://www.youtube.com/watch?v=MtN1YnoL46Q"
        />
        <select className={styles.opt}>
          <option value="mp3">mp3</option>
          <option value="mp4">mp4</option>
        </select>
        <Button className={styles.convertButton} color="primary">
          Convert
        </Button> */}
        <Search />
        <SearchContainer text="스토커" />
        <Typography>Testing</Typography>
      </div>
    );
  }
}

export default App;
