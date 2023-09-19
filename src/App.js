import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TitleBar } from './components';
import { MainMenuPage } from './pages';
import { StoryPage } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <TitleBar />
      <Routes>
        <Route
          path='/'
          exact
          Component={MainMenuPage}
        />
        <Route
          path='/story'
          exact
          Component={StoryPage}
        />
      </Routes>
    </Router>
  );
}

export default App;
