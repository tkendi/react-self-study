import React from "react";
import { cjDataParsing } from "../lib/api/index";

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
      <div>
        {time.map((time, i) => {
          return <p>{time}</p>;
        })}
        {location.map((location, i) => {
          return <p>{location}</p>;
        })}
        {description.map((description, i) => {
          return <p>{description}</p>;
        })}
      </div>
    );
  }
}

export default cjParsing;
