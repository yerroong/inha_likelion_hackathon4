import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" />
          <Route path="/search" />
          <Route path="/posting" />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
