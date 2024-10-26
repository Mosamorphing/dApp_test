import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from './components/Web3.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to my dApp testing ground</h1>} />
        <Route path="/web3" element={<Web3 />} />
      </Routes>
    </Router>
  );
}

export default App;