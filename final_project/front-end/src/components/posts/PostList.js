import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { Button, Typography } from "@material-ui/core";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";
import styles from "../../styles/PostList.module.css";
import { Helmet } from "react-helmet-async";
import Error from "../common/Error";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid #757575;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: #757575;
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  console.log({ post });
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Link to={`/@${user.username}/${_id}`} className={styles.titleTextLogo}>
        {title}
      </Link>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>Postlist 에러 발생</PostListBlock>;
  }

  if (!posts) {
    return <Error />;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && <Button href="/write">새 글 작성하기</Button>}
      </WritePostButtonWrapper>

      {loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
