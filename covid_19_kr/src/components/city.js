import React from "react";
import { cityPicker } from "../api";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  MenuItem,
} from "@material-ui/core";
import styles from "../styles/city.module.css";

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
      <div>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => this.props.handleNumberChange(e.target.value)}
          >
            <InputLabel id="city-select-label">Region</InputLabel>
            {data.map((city, i) => {
              return (
                <MenuItem value={i} key={i}>
                  {city}
                </MenuItem>
              );
            })}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

export default city;
