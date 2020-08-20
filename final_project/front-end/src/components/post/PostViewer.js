import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { makeStyles, CircularProgress } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert'

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: #424242;
`;

const Cicular = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

// const errorText = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const Alert = ({ props }) => {
  return <MuiAlert elevation={6} variant="filed" {...props} />;
};

const PostViewer = ({ post, error, loading, actionButtons }) => {
  const classes = Cicular();

  console.log({ loading });
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <PostViewerBlock>
          <Alert severity="error"> This is not existed posts </Alert>
        </PostViewerBlock>
      );
    }
    return (
      <PostViewerBlock>
        <Alert severity="error"> Create Error </Alert>
      </PostViewerBlock>
    );
  }

  if (!loading || !post) {
    return (
      <PostViewerBlock>
        <div className={classes.root}>
          <CircularProgress />
        </div>
      </PostViewerBlock>
    );
  }

  const { title, body, user, publishedDate, tags } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
