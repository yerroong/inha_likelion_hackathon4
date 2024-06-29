import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CommentContent = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const SearchPostComment = () => {
  const { postId, commentId } = useParams();

  return (
    <Container>
      <CommentContent>
        <h1>댓글 {commentId}</h1>
        <p>여기에 댓글 내용이 들어갑니다.</p>
        <p>게시물 ID: {postId}</p>
      </CommentContent>
    </Container>
  );
};

export default SearchPostComment;