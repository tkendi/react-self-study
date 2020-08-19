import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../styles/MainViewer.module.css";

const MainViewer = () => {
  return (
    <React.Fragment>
      <div className={styles.TitleBlock}>
        <Typography>SoonDoll</Typography>
      </div>
    </React.Fragment>
  );
};

export default MainViewer;
