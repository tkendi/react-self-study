import React from "react";
import styles from "../../styles/AuthForm.module.css";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
          className={styles.styleInput}
        />
        <input
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.passowrd}
          className={styles.styleInput}
        />
        {type === "register" && (
          <input
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
            className={styles.styleInput}
          />
        )}
        {error && <Typography>{error}</Typography>}
        <Button className = {styles.button}>{text}</Button>
      </form>
      <div>
        {type === "login" ? (
          <Link to="/register" className={styles.footerLink}>
            회원가입
          </Link>
        ) : (
          <Link to="/login" className={styles.footerLink}>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
