import React from "react";
import { cjDataParsing } from "../lib/api/index";
import { Typography } from "@material-ui/core";
import styles from "../styles/cj.module.css";

class cjParsing extends React.Component {
  state = {
    time: [],
    location: [],
    description: [],
    state: "",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      const data = await cjDataParsing(this.props.number);
      this.setState({
        time: data.time,
        location: data.location,
        description: data.description,
        state: data.state,
      });
      console.log(this.state);
    }
  }
  render() {
    const { time, location, description } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.timeForm}>
          <Typography>시간</Typography>
          {time.map((time, i) => {
            return (
              <React.Fragment>
                <Typography>{time}</Typography>
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.locationForm}>
          <Typography align = "center">장소</Typography>
          {location.map((location, i) => {
            return (
              <React.Fragment>
                <Typography>{location}</Typography>
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.descriptionForm}>
          <Typography align="right">상태</Typography>
          {description.map((description, i) => {
            return (
              <React.Fragment>
                <Typography>{description}</Typography>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default cjParsing;
