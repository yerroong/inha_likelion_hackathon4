import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PostContent = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const CommentsList = styled.ul`
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const SearchSinglePost = () => {
  const { postId } = useParams();
  
  const comments = [
    { id: 1, text: '안녕하세요~' },
    { id: 2, text: '글 잘보고 갑니다 뭐 어쩌고 저쩌고 내용은 이해가 잘 안가요' },
    { id: 3, text: '브1' },
  ];

  return (
    <Container>
      <PostContent>
        <h1>게시물 제목 {postId}</h1>
        <p>여기에 게시물 내용이 들어갑니다.</p>
      </PostContent>
      <CommentsList>
        {comments.map((comment) => (
          <Link key={comment.id} to={`/search/post/${postId}/comment/${comment.id}`}>
            <CommentItem>{comment.text}</CommentItem>
          </Link>
        ))}
      </CommentsList>
    </Container>
  );
};

export default SearchSinglePost;