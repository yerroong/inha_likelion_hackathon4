import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Mainpage';
import Posting from './pages/Posting';
import Search from './pages/search/Search';
import MyPage from './pages/mypage/Mypage';
import SearchSinglePost from './pages/SinglePost';


const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posting" element={<Posting />}  />
          <Route path="/search/*" element={<Search />} />
          <Route path="/post/*" element={<SearchSinglePost />} />
          <Route path="/posting" />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;