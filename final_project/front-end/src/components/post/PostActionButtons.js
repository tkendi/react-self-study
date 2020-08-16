import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const PostActionButtons = ({ onEdit }) => {
  return (
    <PostActionButtonsBlock>
      <Button onClick={onEdit}>수정</Button>
      <Button>삭제</Button>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
