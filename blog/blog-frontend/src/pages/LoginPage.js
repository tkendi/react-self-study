import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Loginform from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Loginform />
    </AuthTemplate>
  );
};

export default LoginPage;
