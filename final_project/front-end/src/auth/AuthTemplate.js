import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  padding-bottom: 2rem;
  width: 360px;
  height: 550px;
  background: white;
  border-radius: 30px;
`;

class AuthTemplate extends React.Component {
  render() {
    const children = this.props.children;
    return (
      <>
        <AuthTemplateBlock>
          <WhiteBox>{children}</WhiteBox>
        </AuthTemplateBlock>
      </>
    );
  }
}

export default AuthTemplate;
