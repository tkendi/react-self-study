import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';
import Header from '../public_comp/Header'

const sections = [
  { title: 'Streaming', url: '/Streaming' },
  { title: 'Board', url: '/NoticeBoard' },
  { title: 'My Page', url: '/myPage' }
];

class Register extends React.Component {
  render() {
    return (
      <>
        <Header title="SoonDoll" sections={sections} site_pos = "register" />
        <AuthTemplate>
          <AuthForm type="SIGN UP" />
        </AuthTemplate>
      </>
    );
  }
}

export default Register;
