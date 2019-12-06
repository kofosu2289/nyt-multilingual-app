import React, { useState, useEffect } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { useTranslation } from 'react-i18next';
import './App.css';

const history = createHistory();

const App = () => {
  return (
    <div className='App'>
      <Router history={history}>
      </Router>
    </div>
  )
}

export default App;
