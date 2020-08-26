import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../styles/MainViewer.module.css";
import MainImg from '../../img/MainPage.png'

const MainViewer = () => {
  return (
    <React.Fragment>
      <div className={styles.FormBlock}>
        <div className={styles.TitleBlock}>
          <div className={styles.titleForm}>
            <h2 className={styles.textTitle}>순돌이는 너무 귀여운</h2>
            <h2 className={styles.textTitle}>강아지인 것 같아</h2>
            <Typography className={styles.textSubTitle}>
              집에 있는 강아지가 보고싶은가요? 혼자 있는 고양이가 걱정되나요?
            </Typography>
            <Typography className={styles.textSubTitle}>
              SoonDoll을 통해 실시간으로 반려동물을 확인하세요
            </Typography>
          </div>
        </div>
        <div className=  {styles.imgForm}>
          <img src = {MainImg} alt = "MainPage" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainViewer;
