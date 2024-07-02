import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin-bottom: 40px;
  color: #666;
`;

const Button = styled.button`
    width: 300px;
    height: 55px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 30px;
  }

  &.kakao-login-btn {
    background-color: #fedc3f;
  }

  &.naver-login-btn {
    background-color: #20c801;
    color: #fff;
  }
`;

const EmailLoginButton = styled(Link)`
  width: 300px;
  height: 55px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  font-size: 17px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Login = () => {
  return (
    <Container>
      <Title>로그인하기</Title>
      <Subtitle>소셜 아이디 및 이메일로 로그인할 수 있어요.</Subtitle>
      <EmailLoginButton to="/email-login">
        이메일로 로그인하기
      </EmailLoginButton>
      <Button className='google-login-btn'>
        <img src="/google-logo.png" alt="Google" />
        Google로 시작하기
      </Button>
      <Button className='kakao-login-btn'>
        <img src="/kakao-logo.png" alt="Kakao" />
        카카오로 시작하기
      </Button>
      <Button className='naver-login-btn'>
        <img src="/naver-logo.png" alt="Naver" />
        네이버로 시작하기
      </Button>
    </Container>
  );
};

export default Login;