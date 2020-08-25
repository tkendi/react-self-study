import React from "react";
import HeaderContainer from "../common/HeaderContainer";
import ProfileViewer from "../myprofile/ProfileViewer";

const MyPage = () => {
  return (
    <React.Fragment>
      <div>
        <HeaderContainer />
        <ProfileViewer />
      </div>
    </React.Fragment>
  );
};

export default MyPage;
