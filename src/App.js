import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Publications from './components/pages/Publications'
import About from './components/pages/About'
import Cards from './components/Cards'

function App() {
  return (
    <>
    <Router>
      <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/about" component={About}/>
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
