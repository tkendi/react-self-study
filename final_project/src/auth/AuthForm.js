import React from 'react';
import styled from 'styled-components';
import palette from '../styles/js/palette';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../styles/css/AuthForm.scss'

const AuthFormBlock = styled.div`
  h3 {
    text-align: center;
    margin: 1px;
    color: ${palette.gray[9]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]}
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    & + hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: 'Login',
  register: 'Sign up',
};

class AuthForm extends React.Component {
  render() {
    const text = textMap[this.props.type];
    const type = this.props.type;
    return (
      <AuthFormBlock>
        <h3>{text}</h3>
        <form method="post" action = "/">
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="아이디"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          {/* <input type = "text" name = "" placeholder = "아이디" />
          <input type = "password" name = "" placeholder = "비밀번호" /> */}
          {type === 'register' && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
            />
          )}
          <div className = "submit_btn">
            <Button type="submit" disableElevation>
              {text}
            </Button>
          </div>
          <Footer>
            {type === 'login' ? (
              <Link to="/register">회원가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </Footer>
        </form>
      </AuthFormBlock>
    );
  }
}

export default AuthForm;
