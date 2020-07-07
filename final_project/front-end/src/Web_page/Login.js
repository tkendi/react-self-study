import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

class Login extends React.Component {
  render() {
    return (
      <div>
        <AuthTemplate>
          <AuthForm type="Get started" />
        </AuthTemplate>
      </div>
    );
  }
}

export default Login;
