import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div``;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <div>
        <Link to="/">TEST</Link>
      </div>
      {children}
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
