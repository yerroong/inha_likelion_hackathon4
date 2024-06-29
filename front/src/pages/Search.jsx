import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostDetail from './PostDetail';
import CommentDetail from './CommentDetail';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SearchResultList = styled.ul`
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SearchResultItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostTitle = styled.h2`
  font-size: 16px;
  color: #000;
  margin: 0;
`;

const PostMeta = styled.div`
  font-size: 12px;
  color: #777;
`;

const posts = [
  {
    id: 1,
    title: '[C] 백준 1002번 터렛 - 초보 개발자의 이야기, 깃허브',
    date: '2021. 8. 3',
  },
  {
    id: 2,
    title: '[C] 백준 1002번 터렛 - 초보 개발자의 이야기, 깃허브',
    date: '2021. 8. 3',
  },
  {
    id: 3,
    title: '[C] 백준 1002번 터렛 - 초보 개발자의 이야기, 깃허브',
    date: '2021. 8. 3',
  },
];

const Search = () => {
  return (
    <Container>
      <SearchResultList>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <SearchResultItem>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>{post.date}</PostMeta>
            </SearchResultItem>
          </Link>
        ))}
      </SearchResultList>
    </Container>
  );
};

export default Search;