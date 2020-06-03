import React from 'react';
import styled from 'styled-components';
import palette from '../styles/js/palette';

const AuthFormBlock = styled.div`
  border: 0px;
  background: ${palette.cyan[6]};
`;

class AuthForm extends React.Component {
  render() {
    return <AuthFormBlock>AuthForm</AuthFormBlock>;
  }
}

export default AuthForm;
