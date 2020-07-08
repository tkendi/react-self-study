import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';
import Header from '../public_comp/Header'

const sections = [
  { title: 'Streaming', url: '/Streaming' },
  { title: 'Board', url: '/NoticeBoard' },
  { title: 'My Page', url: '/myPage' }
];

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header title = "SoonDoll" sections = {sections} />
        <AuthTemplate>
          <AuthForm type="Get started" />
        </AuthTemplate>
      </div>
    );
  }
}

export default Login;

