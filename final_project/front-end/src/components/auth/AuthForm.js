import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div``;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <input
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange = {onChange}
          value = {form.passowrd}
        />
        {type === "register" && (
          <input
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange = {onChange}
            value = {form.passwordConfirm}
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
