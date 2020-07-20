import React from "react";
import { cityPicker } from "../api";
import { FormControl, NativeSelect } from "@material-ui/core";

class city extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const cityData = await cityPicker();

    console.log(cityData)

    this.setState({
      data: cityData,
    });
  }
  render() {
    const data = Array.from(this.state.data);
    
    return (
      <React.Fragment>
        <h1>COVID-19</h1>
        <FormControl>
          <NativeSelect onChange = {(e) => this.props.handleCityChange(e.target.value)}>
            {data.map((city, i) => (
              <option key={i} value={city} cmp = {i}>
                {city}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default city;
