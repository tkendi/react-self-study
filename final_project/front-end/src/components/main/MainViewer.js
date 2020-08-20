import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../styles/MainViewer.module.css";

const MainViewer = () => {
  return (
    <React.Fragment>
      <div className={styles.TitleBlock}>
        <div className={styles.titleForm}>
          <Typography component="h1" variant="h3" className={styles.title}>
            순돌이는 너무 귀여운
          </Typography>
          <Typography component="h1" variant="h3" className={styles.title}>
            강아지 인 것 같아요
          </Typography>
          <Typography className={styles.title}>
            집에 있는 강아지가 보고싶은가요? 혼자 있는 고양이가 걱정되나요?
          </Typography>
          <Typography className={styles.title}>
            SoonDoll을 통해 실시간으로 반려동물을 확인하세요
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainViewer;
