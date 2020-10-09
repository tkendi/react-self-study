import React from "react";
import SearchingAppbar from "../public/Appbar/SearchingAppbar";
import SearchResult from "./searchResult";
import { Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

@inject("store")
@observer
class searchMain extends React.Component {
  handleTitle = async (search_title: any) => {
    console.log(search_title);
  };
  render() {
    const { store }: any = this.props;
    return (
      <div>
        <SearchingAppbar handleChangeSearch={this.handleTitle} />
        {toJS(store).searching.length === 0 ? (
          <Typography>
            가수 이름과 제목을 입력해주세요.{" "}
            <Typography>
              {" "}
              제목만 입력할 경우 값이 이상하게 나올 수 있습니다.
            </Typography>
          </Typography>
        ) : (
          <SearchResult />
        )}
      </div>
    );
  }
}

export default searchMain;
