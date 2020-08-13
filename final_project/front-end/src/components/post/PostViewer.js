import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";

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

const SubInfo = styled.div`
  margin-top: 1rem;
  color: #757575;

  span + span:before {
    color: #9e9e9e;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: #0097a7;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: #00acc1;
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: #424242;
`;

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>제목</h1>
        <SubInfo>
          <span>
            <b>tester</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          <div className="tag">#태그1</div>
          <div className="tag">#태그2</div>
          <div className="tag">#태그3</div>
        </Tags>
      </PostHead>
      <PostContent
        dangerouslySetInnerHTML={{ __html: "<p>HTML<b>내용</b>입니다.</p>" }}
      />
    </PostViewerBlock>
  );
};
export default PostViewer;
