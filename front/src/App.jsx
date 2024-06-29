import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Mainpage';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}  />
          <Route path="/search/*" element={<Search />} />
          <Route path="/posting" />
        </Routes>
      </main>
    </Router>
  );
};

export default App;