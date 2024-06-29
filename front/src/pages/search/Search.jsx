import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SearchSinglePost from './SearchSinglePost';
import SearchPostComment from './SearchPostComment';
import Sidebar from '../../components/Sidebar';

const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  gap: 60px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  margin-right: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
  background-color: #f5f5f5;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SearchResultList = styled.ul`
  width: 100%;
  max-width: 1200px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SearchResultItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
`;

const PostMeta = styled.div`
  font-size: 14px;
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

const SearchResults = () => (
  <SearchResultList>
    {posts.map((post) => (
      <Link key={post.id} to={`/search/post/${post.id}`}>
        <SearchResultItem>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>{post.date}</PostMeta>
        </SearchResultItem>
      </Link>
    ))}
  </SearchResultList>
);

const Search = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <SearchWrapper>
          <SearchHeader>
            <SearchBox>
              <Input type="text" placeholder="검색" />
              <Button>검색</Button>
            </SearchBox>
            <FilterButton>정확도 순▼</FilterButton>
          </SearchHeader>
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="post/:postId" element={<SearchSinglePost />} />
            <Route path="post/:postId/comment/:commentId" element={<SearchPostComment />} />
          </Routes>
        </SearchWrapper>
      </MainContent>
    </Container>
  );
};

export default Search;