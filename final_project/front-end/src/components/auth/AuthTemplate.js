import React from "react";
import styles from "../../styles/AuthTemplate.module.css";
import { Link } from "react-router-dom";

const AuthTemplate = ({ children, page }) => {
  return (
    <div className={styles.AuthTemplate}>
      <div className={styles.WhiteBox}>
        {page === "Login" ? (
          <Link to="/" className={styles.logoArea}>
            Sign In to SoonDoll
          </Link>
        ) : (
          <Link to="/" className={styles.logoArea}>
            Create Account
          </Link>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
