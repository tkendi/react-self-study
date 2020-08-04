import React from "react";
import Clock from "react-live-clock";
import styles from "./clock.module.css";

const clock = () => {
  return (
    <React.Fragment>
      <div className={styles.clockForm}>
        <Clock
          format={"HH:mm"}
          ticking={true}
          timezone={"Asia/Seoul"}
          className={styles.clockText}
        />
        <Clock
          format={"MM DD일"}
          ticking={true}
          timezone={"Asia/Seoul"}
          className={styles.dateText}
        />
      </div>
    </React.Fragment>
  );
};

export default clock;
