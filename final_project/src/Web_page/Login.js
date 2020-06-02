import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

class Login extends React.Component {
  render() {
    return (
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    );
  }
}

export default Login;
