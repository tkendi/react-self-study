import React from "react";
import { cityPicker } from "../api";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import styles from '../styles/city.modules.css'

class city extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const cityData = await cityPicker();

    console.log(cityData);

    this.setState({
      data: cityData,
    });
  }
  render() {
    const data = Array.from(this.state.data);
    return (
      <div className={styles.picker}>
        <FormControl>
          <InputLabel id="city-select-label">Region</InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={this.state.city}
            onChange={(e) => this.props.handleCityChange(e.target.value)}
          >
            {data.map((city, i) => {
              return (
                <MenuItem value={i} key={i}>
                  {city}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default city;
