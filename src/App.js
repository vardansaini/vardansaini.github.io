import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
      <Route path="/vardansaini" exact component={Home}/>
      <Route path="/vardansaini/projects" component={Projects}/>
    </Switch>
    </Router>
    </div>
    
  );
}

export default App;
