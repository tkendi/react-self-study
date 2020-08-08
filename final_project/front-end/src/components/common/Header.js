import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { Button } from "@material-ui/core";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.dive`
  height: 4rem;
`;

const Header = () => {
  return (
    <React.Fragment>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">TEST</div>
          <div className="right">
            <Button>로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
    </React.Fragment>
  );
};

export default Header;
