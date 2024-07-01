import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 40px;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 60px;
`;

const Content = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 200px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #bbb;
  }
`;

const ToggleButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#007BFF' : '#ccc')};
  color: #fff;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#bbb')};
  }
`;

const Posting = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 글 등록 로직을 구현
    console.log({
      title,
      category,
      content,
      file,
      isPublic,
    });
    navigate('/');
  };

  return (
    <Container>
      <SubContainer>
        <Sidebar />
        <Content>
          <PostContainer>
            <h2>글쓰기</h2>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="title">제목을 입력해 주세요.</Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Label htmlFor="category">카테고리 선택</Label>
              <Input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <Label htmlFor="content">내용을 입력해 주세요.</Label>
              <TextArea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <FileInput type="file" onChange={handleFileChange} />
              <ButtonContainer>
                <ToggleButton
                  type="button"
                  active={isPublic}
                  onClick={() => setIsPublic(!isPublic)}
                >
                  {isPublic ? '공개' : '비공개'}
                </ToggleButton>
                <Button type="submit">등록</Button>
              </ButtonContainer>
            </Form>
          </PostContainer>
        </Content>
      </SubContainer>
    </Container>
  );
};

export default Posting;
