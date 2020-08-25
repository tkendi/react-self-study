import React from "react";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import styles from "../../styles/Profile.module.css";

const ProfileViewer = () => {
  return (
    <React.Fragment>
      <div className={styles.FormBlock}>
        <div className={styles.ProfileBlock}>
          <AccountBoxIcon style={{ fontSize:  }}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileViewer;
