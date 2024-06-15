import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Routes from '../src/routes/Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;