import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Mainpage';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}  />
          <Route path="/search" />
          <Route path="/posting" />
        </Routes>
      </main>
    </Router>
  );
};

export default App;