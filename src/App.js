import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TitleBar } from './components';
import { MainMenu } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <TitleBar />
      <Routes>
        <Route path='/' exact Component={MainMenu} />
      </Routes>
    </Router>
  );
}

export default App;
