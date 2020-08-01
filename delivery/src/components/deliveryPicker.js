import React from "react";
import { deliveryName } from "../lib/api";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from "@material-ui/core";
import styles from "../styles/deliveryPicker.module.css";

//formControl 스타일
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

class deliveryPicker extends React.Component {
  state = {
    datas: [],
  };

  async componentDidMount() {
    const data = await deliveryName();

    console.log(data);
    this.setState({
      datas: data.name,
    });
  }
  render() {
    const datas = this.state.datas;
    return (
      <div className={styles.form}>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel id="delivery-name">Delivery</InputLabel>
          <Select
            labelId="delivery-name-label"
            id="delivery-name"
            onChange={(e) => this.props.handleNumbserChange}
          >
            {datas.map((name, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default deliveryPicker;
