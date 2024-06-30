import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Mainpage';
import Search from './pages/search/Search';
import MyPage from './pages/Mypage';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}  />
          <Route path="/search/*" element={<Search />} />
          <Route path="/posting" />
          <Route path="/mypage" element={<MyPage/>}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;