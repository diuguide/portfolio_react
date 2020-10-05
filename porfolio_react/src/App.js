import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavBar from './components/NavBar/index';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Projects' component={Projects} />
      </Router>
    </div>

  );
}

export default App;
