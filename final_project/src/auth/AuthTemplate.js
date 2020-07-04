import React from 'react';
import styled from 'styled-components';
import Header from '../public_comp/Header'

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.255);
  padding-bottom: 2rem;
  width: 360px;
  height: 550px;
  background: white;
  border-radius: 30px;
`;

const sections = [
  { title: 'Streaming', url: '#' },
  { title: 'Board', url: '#' },
  { title: 'My Page', url: '#' },
];

const AuthTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <AuthTemplateBlock>
        <WhiteBox>{children}</WhiteBox>
      </AuthTemplateBlock>
    </div>
  );
};

export default AuthTemplate;
