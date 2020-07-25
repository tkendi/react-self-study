import React from "react";
import { cjDataParsing } from "../lib/api/index";
import { Typography } from "@material-ui/core";
import styles from "../styles/cj.module.css";

class cjParsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      location: [],
      description: [],
      state: "",
    };
  }

  async componentDidMount() {
    const data = await cjDataParsing(632234576584);
    this.setState({
      time: data.time,
      location: data.location,
      description: data.description,
      state: data.state,
    });
    console.log(this.state);
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
                <Typography align="left">{time}</Typography>
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.locationForm}>
          <Typography>장소</Typography>
          {location.map((location, i) => {
            return (
              <React.Fragment>
                <Typography align="center">{location}</Typography>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <Typography>상태</Typography>
          {description.map((description, i) => {
            return (
              <React.Fragment>
                <Typography align="right">{description}</Typography>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default cjParsing;
