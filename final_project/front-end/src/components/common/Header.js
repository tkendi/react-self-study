import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import PetsIcon from '@material-ui/icons/Pets';

const Header = ({ user, onLogout }) => {
  return (
    <React.Fragment>
      <div className={styles.HeadBlock}>
        <div className={styles.Wrapper}>
          <Link to="/" className={styles.logo}>
            <PetsIcon size/>  SoonDoll
          </Link>
          <div>

          </div>
          {user ? (
            <div className={styles.right}>
              <div className={styles.userInfo}>
                {user.useranem}
                <Typography>님 환영합니다</Typography>
              </div>
              <Button onClick={onLogout}>logout</Button>
            </div>
          ) : (
            <div className={styles.right}>
              <Button href="/login">SIGN IN</Button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.spacer} />
    </React.Fragment>
  );
};

export default Header;
