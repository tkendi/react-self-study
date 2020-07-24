import React from "react";
import styled from "styled-components";

const numTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 9;
  right: 0;
  background: #8d8d8d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5)
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`;

const numberTemplate = ({ children }) => {
  return (
    <numTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </numTemplateBlock>
  );
};

export default numberTemplate;
