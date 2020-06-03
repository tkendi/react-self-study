import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

class Register extends React.Component {
  render() {
    return (
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    );
  }
}

export default Register;
