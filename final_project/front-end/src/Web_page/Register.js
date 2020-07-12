import React from 'react';
import AuthTemplate from '../auth/AuthTemplate';
import Header from '../public_comp/Header';
import RegisterForm from '../auth/RegisterForm';

const sections = [
  { title: 'Streaming', url: '/Streaming' },
  { title: 'Board', url: '/NoticeBoard' },
  { title: 'My Page', url: '/myPage' },
];

class Register extends React.Component {
  render() {
    return (
      <div>
        <Header title="SoonDoll" sections={sections} site_pos="register" />
        <AuthTemplate>
          <RegisterForm />
        </AuthTemplate>
      </div>
    );
  }
}

export default Register;
