import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';
import Header from '../public_comp/Header';

const sections = [
  { title: 'Streaming', url: '#' },
  { title: 'Board', url: '#' },
  { title: 'My Page', url: '#' }
];

class Login extends React.Component {
  render() {
    return (
      <>
        <Header title="SoonDoll" sections={sections} />
        <AuthTemplate>
          <AuthForm type="Get started" />
        </AuthTemplate>
      </>
    );
  }
}

export default Login;

//https://has3ong.tistory.com/301?category=831354 => 카카오 챗봇
