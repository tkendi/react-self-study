import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import {Button} from "@material-ui/core";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

// const SubInfo = styled.div`
//   color: #757575;

//   span + span:before {
//     color: #bdbdbd;
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: "\\B7";
//   }
// `;

// const Tags = styled.div`
//   margin-top: 0.5rem;
//   .tag {
//     display: inline-block;
//     color: #0097a7;
//     text-decoration: none;
//     margin-right: 0.5rem;
//     &:hover {
//       color: #00acc1;
//     }
//   }
// `;

const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>제목</h2>
      <SubInfo username="username" publishedDate={new Date()} />
      <Tags tags={["태그1", "태그2", "태그3"]} />
      <p>포스트 내용의 일부분...</p>
    </PostItemBlock>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button>새 글 작성하기</Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};

export default PostList;
