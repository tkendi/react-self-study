import React from "react";
import EditorContainer from '../../containers/write/EditorContainer'
import Responsive from "../common/Responsive";
import TagBoxContainer from '../../containers/write/TagBoxContainer'
import WriteActionButtons from '../write/WriteActionButtons'

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
