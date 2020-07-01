import React from 'react';
import styled from 'styled-components';
import palette from '../styles/js/palette';
import SideBar from '../public_comp/SideBar';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Title = styled.div`
//   display: flex;
//   font-weight: bold;
//   padding-bottom: 5px;
//   text-align: center;
//   h1 {
//     padding-bottom: 5rem;
//   }
// `;

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

const AuthTemplate = ({ children }) => {
  return (
    <div>
      <SideBar />
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area"></div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    </div>
  );
};

export default AuthTemplate;
