import React from "react";
import HeaderContainer from "../../components/common/HeaderContainer";
import { Typography } from "@material-ui/core";
import PostViewerContainer from '../../containers/post/PostViewerContainer'
import PaginationContainer from '../../containers/posts/PaginationContainer'

const PostPage = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <PostViewerContainer />
      <PaginationContainer />
    </React.Fragment>
  );
};

export default PostPage;
