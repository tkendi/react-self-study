import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

class Login extends React.Component {
  render() {
    return (
      <AuthTemplate type = "login">
        <AuthForm type = "login" />
      </AuthTemplate>
    );
  }
}

export default Login;
