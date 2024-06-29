import React from 'react';
import styled from 'styled-components';
import '../style.css';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
`;

const WidgetWrap = styled.div`
    margin-bottom: 20px;
    background-color: var(--preset--color--base-2);
    box-shadow: 0px 12px 16px 0 #888;
    border-radius: 30px;
    padding: 20px;
    width: 300px;

    &.user-profile-widget {
        height: 350px;
    }
`;

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const UserProfileImg = styled.img`
    background-color: #cdcdcd;
    width: 55px;
    height: 55px;
`;

const UserTitle = styled.div`
    
`;

const UserName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

const UserStats = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const PostList = styled.div`
  margin-top: 20px;
`;

const PostItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

const Sidebar = () => {
  const myPosts = [
    { id: 1, title: '작성한 글 제목 1', date: '24.00.00' },
    { id: 2, title: '작성한 글 제목 2', date: '24.00.00' },
    { id: 3, title: '작성한 글 제목 3', date: '24.00.00' },
  ];

  return (
    <SidebarContainer>
      <WidgetWrap className='user-profile-widget'>
        <UserProfile>
            <UserProfileImg />
            <UserTitle>
                <UserName>닉네임</UserName>
                <UserEmail>example@gmail.com</UserEmail>
            </UserTitle>
        </UserProfile>
        <UserStats>게시글 작성: 20회</UserStats>
        <UserStats>댓글 작성: 20회</UserStats>
        <Button>글쓰기</Button>
      </WidgetWrap>
      <WidgetWrap>
        <h3>내가 작성한 글</h3>
        {myPosts.map(post => (
          <PostItem key={post.id}>{post.title} <br /><span>{post.date}</span></PostItem>
        ))}
      </WidgetWrap>
    </SidebarContainer>
  );
};

export default Sidebar;