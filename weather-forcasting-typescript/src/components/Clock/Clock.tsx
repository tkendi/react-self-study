import React from "react";
import Clock from "react-live-clock";

const clock = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <Clock format={"MM월 DD"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
        <div>
          <Clock format={"HH:MM"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default clock;
