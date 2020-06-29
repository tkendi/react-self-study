import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

class Login extends React.Component {
  render() {
    return (
      <AuthTemplate>
        <AuthForm type = "Sign In to" />
      </AuthTemplate>
    );
  }
}

export default Login;
