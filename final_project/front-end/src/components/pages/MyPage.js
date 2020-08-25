import React from "react";
import HeaderContainer from "../common/HeaderContainer";
import ProfileContainer from '../../containers/myProfile/ProfieContainer'

const MyPage = () => {
  return (
    <React.Fragment>
      <div>
        <HeaderContainer />
        <ProfileContainer />
      </div>
    </React.Fragment>
  );
};

export default MyPage;
