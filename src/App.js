import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import About from "./components/About"


function App() {
  return (
    <Router>
    
    <NavBar/>

    <Switch>
      <Route path = '/about'><About /></Route>
      <Route path = '/'><Home /></Route>
    </Switch>

  </Router>
  );
}

export default App;
