import React from "react";
import Clock from "react-live-clock";
import styles from "./clock.module.css";

const clock = () => {
  return (
    <React.Fragment>
      <div className={styles.clockForm}>
        <div>
          <Clock
            format={"HH:mm"}
            ticking={true}
            timezone={"Asia/Seoul"}
            className={styles.clockText}
          />
        </div>
        <div>
          <Clock
            format={"MM월 DD"}
            ticking={true}
            timezone={"Asia/Seoul"}
            className={styles.dateText}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default clock;
