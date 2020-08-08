import React from "react";
import Responsive from "./Responsive";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";

// const HeaderBlock = styled.div`
//   position: adsolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     to right rgba(200, 200, 220, 0.3),
//     rgba(250, 250, 224, 0.5),
//     rgba(255, 255, 250, 0.9)
//   );
//   background-size: cover;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
// `;

// const Wrapper = styled(Responsive)`
//   height: 4rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .logo {
//     font-size: 1.125rem;
//     font-weight: 800;
//     letter-spacing: 2px;
//   }
//   .right {
//     display: flex;
//     align-items: center;
//   }
//   .rightText {
//     padding-right: 15px;
//     padding-left: 15px;
//   }
// `;

// const Spacer = styled.div`
//   height: 4rem;
// `;

// const UserInfo = styled.div`
//   font-weight: 800;
//   margin-right: 1rem;
// `;

const Header = ({ user, onLogout }) => {
  return (
    <React.Fragment>
      <div className={styles.HeadBlock}>
        <div className={styles.Wrapper}>
          <Link to="/" className={styles.logo}>
            TEST
          </Link>
          {user ? (
            <div className={styles.right}>
              <div className={styles.userInfo}>{user.useranem}</div>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className={styles.right}>
              <Button href="/login">로그인</Button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.spacer} />
    </React.Fragment>
  );
};

export default Header;

// {user ? (
//   <div className="right">
//     <UserInfo>{user.username}</UserInfo>
//     <Button onClick={onLogout}>로그아웃</Button>
//   </div>
// ) : (
//   <div className="right">
//     <Button href="/login">로그인</Button>
//   </div>
// )}

{
  /* <Grid container alignItem="center">
<Button className="rightText" size="large">
  Streaming
</Button>
<Button className="rightText" size="large">
  Board
</Button>
<Button className="rightText" size="large">
  MyPage
</Button>
</Grid> */
}
