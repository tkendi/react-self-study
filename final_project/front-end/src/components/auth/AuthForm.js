import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div``;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type }) => {
  const type = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <input autoComplete="username" name="username" placeholder="아이디" />
        <input
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === "register" && (
          <input
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <button>{text}</button>
      </form>
      {type === "login" ? (
        <Link to="/register">회원가입</Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;
