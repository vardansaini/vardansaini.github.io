import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Publications from './components/pages/Publications'
import About from './components/pages/About'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
      <Route path="/vardansaini" exact component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
      <Route path="/publications" component={Publications}/>
    </Switch>
    </Router>
    </div>
    
  );
}

export default App;
