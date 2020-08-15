import React from "react";
import { Typography, Button } from "@material-ui/core";
import styles from "./App.module.css";
import * as searchAPI from "./lib/api/search";

class App extends React.Component {
  async componentDidMount() {
    const data = await searchAPI.search();
    console.log(data);
  }
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
        <Typography>Testing</Typography>
      </div>
    );
  }
}

export default App;
