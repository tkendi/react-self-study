import React from "react";
import {
  AppBar,
  Toolbar, 
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { observer } from "mobx-react";

@observer
class SearchingAppbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Youtube Downloader
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default SearchingAppbar;
