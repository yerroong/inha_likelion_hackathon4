import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ProfileContainer = styled.div`
    height:80vh;
    position: absolute;
    left: 60%;
    transform: translateX(-60%);
    display: flex;
    flex-direction: row;
`;
const ProfileCardContainer = styled.div`
    width: 470px;
    height: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 5px 15px 0px #888;
    border-radius: 30px;
    background-color: #F5FDFF;
    margin-top: 30px;
`;
const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
`;
const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 25px;
`;
const ProfileImg = styled.img`
    background-color: lightgrey;
    width: 200px;
    height: 200px;
    
`;
const ImgButton = styled.button`
    width: 70px;
    height: 20px;
    margin-top: 15px;
    border-radius: 50px;
    border-style: none;
    font-size: 10px;
    background-color: #B8C5D4;
    color: white;
    cursor: pointer;
`;
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const NameBox = styled.div`
     display:flex;
    flex-direction: row;
`;
const UserName = styled.h2`
    display:flex;
    flex-direction: row;
`;
const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px;
    margin-bottom: 0;
`;
const NameButton1 = styled.button`
    text-align: center;
    width: 40px;
    height: 15px;
    border-radius: 50px;
    border-style: none; 
    font-size: 10px;
    margin-right: 5px;
    background-color: #B8C5D4;
    cursor: pointer;
`;
const NameBuuton2 = styled.button`
    text-align: center;
    width: 40px;
    height: 15px;
    border-radius: 50px;
    border-style: none;
    font-size: 10px;
    background-color: #B8C5D4;
    cursor: pointer;
`;
const UserEmail = styled.p`
    margin-top: 0;
    //길어지면 줄바꿈
`;
const UserState = styled.p`
    margin-top: 30px;
    margin: 0;
`;
const BookMarkBox = styled.div`
    display: flex;
    justify-content: center;
`;
const BookMarkButton = styled.div`
    
`;
const CommentButton = styled.div`
    
`;
const PostContainer = styled.div`
    width: 400px;
    margin: 30px;
    margin-left: 100px;
    margin-right: 0;
`;
const PostContainerTitle = styled.p`
    display :inline-block;
    background-color: #90A5CD;
    color:white;
    border-radius: 10px;
    padding: 5px;
    font-size: 17px;
`;
const PostCardBox = styled.div`
    margin: 20px;
    margin-left: 0;
`;
const PostCardTitle = styled.h2`
    font-weight: bold;
    margin: 0;
`;
const PostCardDate = styled.p`
    margin: 0;
    color: #5B5858;
    font-size: small;
`;
const MyPage = () => {
    const [MyPosts, setMyPosts] = useState([
        { id: 1, title: '내가 작성한 게시물 제목', date: '24.00.00' },
        { id: 2, title: '내가 작성한 게시물 제목', date: '24.00.00' },
        { id: 3, title: '내가 작성한 게시물 제목', date: '24.00.00' },
        { id: 4, title: '내가 작성한 게시물 제목', date: '24.00.00' },
        { id: 5, title: '내가 작성한 게시물 제목', date: '24.00.00' },
        { id: 6, title: '내가 작성한 게시물 제목', date: '24.00.00' },    
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(' ')
          .then(res => {
            setMyPosts(res.data);
          })
          .catch(e => {
            console.log(e);
          });
      }, []);  

      const handlePostClick = (postId) => {
        navigate(`/PostDetail/${postId}`);
    };

    return (

    <ProfileContainer>
    <ProfileCardContainer>
    <ProfileBox>
        <ImgBox>
            <ProfileImg></ProfileImg>
            <ImgButton>사진 수정</ImgButton>
        </ImgBox>
        <TextBox>
        <NameBox>
            <UserName>닉네임</UserName>
            <ButtonBox>
                <NameButton1>수정</NameButton1>
                <NameBuuton2>완료</NameBuuton2>
            </ButtonBox>
        </NameBox>
        <UserEmail>example@gmail.com</UserEmail>
        <UserState>글 작성 : 20회</UserState>
        <UserState>댓글 작성 : 20회</UserState>
        </TextBox>
    </ProfileBox>
    <BookMarkBox>

    </BookMarkBox>
    </ProfileCardContainer>
    <PostContainer>
        <PostContainerTitle>내가 쓴 글 살펴보기</PostContainerTitle>
        {/* <PostCardBox>
            <PostCardTitle>내가 작성한 글</PostCardTitle>
            <PostCardDate>24.00.0</PostCardDate> */}
            {MyPosts.map( post => (
          <PostCardBox 
          key={post.id} onClick={() => handlePostClick(post.id)}>
            <PostCardTitle>{post.title}</PostCardTitle> 
            <PostCardDate>{post.date}</PostCardDate>
            </PostCardBox>
        ))}
        {/* </PostCardBox> */}
    </PostContainer>
    </ProfileContainer>
    );
};

export default MyPage;