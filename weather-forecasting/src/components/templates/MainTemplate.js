import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(100, 50, 50, 0.5) 10%,
      rgba(20, 60, 20, 0.9) 70%,
      rgba(31, 50, 40, 1)
    );
  background-size: cover;
  font-family: sans-serif;
  color: white;
`;

const MainTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainTemplate;
