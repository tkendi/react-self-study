import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.form}>
        <Typography variant="h4" className={styles.head} noWrap gutterBottom>
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
        <button className={styles.convertButton}>Convert</button>
      </div>
    );
  }
}

export default App;
