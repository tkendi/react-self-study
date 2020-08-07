import React from "react";
import Clock from "react-live-clock";
import styles from './clock.module.css'

const clock = () => {
  return (
    <React.Fragment>
      <div>
        <div className = {styles.dateText}>
          <Clock format={"MM월 DD"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
        <div className = {styles.clockText}>
          <Clock format={"HH:MM"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default clock;
