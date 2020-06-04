import React from 'react';
import styled from 'styled-components';
import palette from '../styles/js/palette';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
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

class AuthForm extends React.Component {
  const text = {this.props.type}
  render() {
    return (
      <AuthFormBlock>
        <h3>로그인</h3>
        <form>
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
          <Button variant="contained">로그인</Button>
        </form>
        <Footer>
          <Link to = "/register">회원가입</Link>
        </Footer>
      </AuthFormBlock>
    );
  }
}

export default AuthForm;
