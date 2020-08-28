import React, { useState } from "react";
import {
  Typography,
  Button,
  Paper,
  ButtonGroup,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import styles from "../../styles/MainViewer.module.css";
import MainImg from "../../img/MainPage.png";
import { purple, yellow } from "@material-ui/core/colors";
import Axios from "axios";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffeb3b",
    },
    secondary: {
      main: "#fffde7",
    },
  },
});

const MainViewer = () => {
  const [img, setImage] = useState(null);
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };
  const onClick = async () => {
    const formData = new FormData();
    formData.append("file", img);
    const res = await Axios.post("/api/upload", formData);
    console.log(res);
  };
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
            <ThemeProvider theme={theme}>
              <ButtonGroup className={styles.buttonForm}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{width: '11rem', height: '3.3rem'}}
                  href="/login"
                >
                  Sign In
                </Button>{" "}
                <Button variant="contained" color="secondary" href="/register" style = {{width: '8rem', height: '3.28rem'}} >
                  Sign Up
                </Button>
              </ButtonGroup>
            </ThemeProvider>
          </div>
        </div>
        <div className={styles.imgForm}>
          <img src={MainImg} alt="MainPage" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainViewer;
