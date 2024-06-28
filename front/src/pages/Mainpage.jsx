import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import Header from './Header';
//현재 느낌만 냄 크게 수정해야함.

const HomePageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const PostsContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: left;
`;

const PostList = styled.ul`
  padding: 0;
`;

const PostItem = styled.li`
  list-style-type: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const PostLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

const PostTitle = styled.h3`
  margin: 0;
`;

const PostDescription = styled.p`
  margin: 5px 0 0 0;
`;

const MoreButtonContainer = styled.div`
  margin-top: 20px;
`;

const MoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleFindMoreClick = () => {
    navigate('/finding');
  };

  return (
    <HomePageContainer>
      {/* <Header /> */}
      <Title>쉽고 편리한 코딩 공부, 함께 시작해보세요.</Title>
      <Subtitle>
        백준 문제를 기록하고 함께 공유할 수 있어요!<br />
        내가 필요한 문제를 찾고 저장할 수도 있고 반응을 추가할 수도 있어요.
      </Subtitle>
      <PostsContainer>
        <h2>오늘의 글</h2>
        <PostList>
          {/* 여기에 실제 포스트 데이터를 삽입 */}
          <PostItem>
            <PostLink href="https://www.acmicpc.net/problem/1002" target="_blank" rel="noopener noreferrer">
              <PostTitle>[백준 알고리즘 1002번] 터렛 C언어 - 나그네의 발자취 - 티스토리</PostTitle>
            </PostLink>
            <PostDescription>2020.4.7 - 문제와 테스트 케이스</PostDescription>
          </PostItem>
          <PostItem>
            <PostLink href="https://www.acmicpc.net/problem/1002" target="_blank" rel="noopener noreferrer">
              <PostTitle>[C] 백준 1002번 터렛 - 초보 개발자의 이야기, 리하트 - 티스토리</PostTitle>
            </PostLink>
            <PostDescription>2020.1.3 - 터렛 각 테스트 케이스</PostDescription>
          </PostItem>
        </PostList>
      </PostsContainer>
      <MoreButtonContainer>
        <MoreButton onClick={handleFindMoreClick}>더 많은 글 찾으러가기</MoreButton>
      </MoreButtonContainer>
    </HomePageContainer>
  );
};

export default HomePage;
