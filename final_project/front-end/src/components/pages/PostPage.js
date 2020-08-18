import React from "react";
import HeaderContainer from "../../components/common/HeaderContainer";
import { Typography } from "@material-ui/core";
import PostViewerContainer from "../../containers/post/PostViewerContainer";
import PaginationContainer from "../../containers/posts/PaginationContainer";
import { Helmet } from "react-helmet-async";

const PostPage = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <Helmet>
        <title>PostPage</title>
      </Helmet>
      <PostViewerContainer />
      <PaginationContainer />
    </React.Fragment>
  );
};

export default PostPage;
