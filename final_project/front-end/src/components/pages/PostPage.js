import React from "react";
import HeaderContainer from "../../components/common/HeaderContainer";
import { Typography } from "@material-ui/core";
import PostViewerContainer from '../../containers/post/PostViewerContainer'

const PostPage = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <PostViewerContainer />
    </React.Fragment>
  );
};

export default PostPage;
