import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Mainpage';
import Search from './pages/search/Search';
import Posting from './pages/Posting'

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posting" element={<Posting />}  />
          <Route path="/search/*" element={<Search />} />
          <Route path="/posting" />
        </Routes>
      </main>
    </Router>
  );
};

export default App;