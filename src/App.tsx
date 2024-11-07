// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebTemp from './components/WebTemp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to my dApp testing ground</h1>} />
        <Route path="/web3" element={<WebTemp />} />
      </Routes>
    </Router>
  );
}

export default App;