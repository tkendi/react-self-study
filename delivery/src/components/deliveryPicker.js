import React from "react";
import { deliveryInfo } from "../lib/api";
import { MenuItem, FormControl, TextField } from "@material-ui/core";
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
    const data = await deliveryInfo();
    this.setState({
      datas: data.name,
    });
  }
  render() {
    const datas = this.state.datas;
    return (
      <div className={styles.form}>
        <FormControl fullWidth margin="normal" variant="standard">
          <TextField
            select
            fullWidth={true}
            label="Delivery"
            helperText="List of Delivery Company"
            onChange={(e) => this.props.handleNamechange(e.target.value)}
          >
            {datas.map((name, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {name}
                </MenuItem>
              );
            })}
          </TextField>
        </FormControl>
      </div>
    );
  }
}

export default deliveryPicker;
