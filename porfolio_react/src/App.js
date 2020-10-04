import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <>
      <Route exact path='/' component={Home} />
      </>
    </Router>
  );
}

export default App;
