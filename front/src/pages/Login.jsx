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
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const EmailLoginButton = styled(Link)`
  width: 300px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
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
      <Button>
        <img src="/google-logo.png" alt="Google" />
        Google로 시작하기
      </Button>
      <Button>
        <img src="/kakao-logo.png" alt="Kakao" />
        카카오로 시작하기
      </Button>
      <Button>
        <img src="/naver-logo.png" alt="Naver" />
        네이버로 시작하기
      </Button>
      <EmailLoginButton to="/email-login">
        이메일로 로그인하기
      </EmailLoginButton>
    </Container>
  );
};

export default Login;