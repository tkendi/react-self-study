import React from 'react';
import styled from 'styled-components';
import palette from '../styles/js/palette';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import { LockIcon, PersonOutlineIcon }from '@material-ui/icons';
import '../styles/css/AuthForm.scss';

const AuthFormBlock = styled.div`
  margin-top: 0.5rem;
  padding-top: 8.5rem;
  text-align: center;
  h3 {
    text-align: center;
    margin: 1px;
    color: ${palette.gray[9]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: solid 4px ${palette.gray[6]}
  border-inline: center;
  padding-bottom: 0.3rem;
  padding-top: 2rem;
  outline: none;
  width: 80%;
  
  &:focus{
    color: $oc-teal-7;
    border-bottom: 4px solid yellow;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  a {
    color: ${palette.gray[6]};
    text-decoration: none;
    & + hover {
      color: ${palette.gray[9]};
    }
  }
`;

const Signup = styled.div`
  margin: 0 auto;
  padding-top: 1.8rem;
`;

const textMap = {
  login: 'Sign In to SoonDoll',
  register: 'Create Account',
};

class AuthForm extends React.Component {
  render() {
    const {type, form, onChange, onSubmit} = this.props.type;
    const type_text = type;
    let prop_type = ''

    if(type === 'Get started') {
      prop_type = 'login'
    } else {
      prop_type = 'register'
    }

    const text = textMap[prop_type];
    return (
      <AuthFormBlock>
        <h3>{text}</h3>
        <form
          onSubmit = {onSubmit}
          style={{ margin: '0 auto', widht: '240px' }}
        >
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="Username"
            onChange = {onChange}
            value = {form.username}
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="Password"
            type="password"
            onChange = {onChange}
            value = {form.password}
          />
          {prop_type === 'register' && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              type="password"
              onChange = {onChange}
              value = {form.passwordConfirm}
            />
          )}
          <Signup>
            <Button type="submit">{type_text}</Button>
          </Signup>
          <Footer>
            {prop_type === 'login' ? (
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
