import React from "react";
import MainViewer from "../main/MainViewer";
import HeaderContainer from "../common/HeaderContainer";
import { Helmet } from "react-helmet-async";
import styles from "../../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <Helmet>
        <title>SoonDoll</title>
      </Helmet>
      <MainViewer />
    </React.Fragment>
  );
};

export default MainPage;
