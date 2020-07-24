import React from "react";
import { cjDataParsing } from "../lib/api/index";
import { Typography } from "@material-ui/core";

class cjParsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      location: [],
      description: [],
    };
  }

  async componentDidMount() {
    const data = await cjDataParsing(632234576584);
    this.setState({
      time: data.time,
      location: data.location,
      description: data.description,
    });
  }
  render() {
    const { time, location, description } = this.state;
    return (
      <React.Fragment>
        <div>
          {time.map((time, i) => {
            return <Typography>{time}</Typography>;
          })}
        </div>
        <div>
          {location.map((location, i) => {
            return <Typography>{location}</Typography>;
          })}
        </div>
        <div>
          {description.map((description, i) => {
            return <Typography>{description}</Typography>;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default cjParsing;
