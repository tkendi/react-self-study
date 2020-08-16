import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import AskRemoveModal from "./AskRemoveModal";

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <React.Fragment>
      <PostActionButtonsBlock>
        <Button onClick={onEdit}>수정</Button>
        <Button onClick={onRemove}>삭제</Button>
      </PostActionButtonsBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </React.Fragment>
  );
};

export default PostActionButtons;
