import React, { useState } from "react";
import styled from "styled-components";
import ImageButton from "./ImageButton";

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled.button`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  const [urlData, setUrlData] = useState({})
  const info = {}

  const Urlhandler = (e) => {
    const data = e;
    console.log(data[0].data_url)
    setUrlData(data[0].data_url)
  }

  console.log({info})

  return (
    <WriteActionButtonBlock>
      <StyledButton onClick={onPublish}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <ImageButton urlhandler = {Urlhandler} />
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtons;
