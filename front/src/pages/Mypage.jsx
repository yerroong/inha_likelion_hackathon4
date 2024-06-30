import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = styled.div`
    height:80vh;
    position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ProfileCardContainer = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;

box-shadow: 0px 5px 15px 0px #888;

border-radius: 30px;
    background-color: #F5FDFF;
`

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
`
const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 25px;
`
const ProfileImg = styled.img`
    background-color: lightgrey;
    width: 200px;
    height: 200px;
    
`
const ImgButton = styled.button`
    width: 70px;
    height: 20px;
    margin-top: 15px;
    border-radius: 50px;
    border-style: none;
    font-size: 10px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`
const NameBox = styled.div`
     display:flex;
    flex-direction: row;
` 
const UserName = styled.h2`
    display:flex;
    flex-direction: row;
`
const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px;
`
const NameButton1 = styled.button`
    text-align: center;
    width: 40px;
    height: 15px;
    border-radius: 50px;
    border-style: none; 
    font-size: 10px;
    margin-right: 5px;
`
const NameBuuton2 = styled.button`
    text-align: center;
    width: 40px;
    height: 15px;
    border-radius: 50px;
    border-style: none;
    font-size: 10px;
`
const UserEmail = styled.p`
    //길어지면 줄바꿈
`
const UserState = styled.p`
    margin: 0;
`
const BookMarkBox = styled.div`
    display: flex;
    justify-content: center;
`

const MyPage = () => {
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
    </ProfileContainer>
    );
};

export default MyPage;