import React from "react";
import Editor from "../write/Editor";
import Responsive from "../common/Responsive";
import TagBox from '../write/TagBox'
import WriteActionButtons from '../write/WriteActionButtons'

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
