import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Blogs from "./components/Blogs"


function App() {
  return (
    <Router>
    
    <NavBar/>

    <Switch>
      <Route path = '/projects'><Projects /></Route>
      <Route path = '/blogs'><Blogs /></Route>
      <Route path = '/contact'><Contact /></Route>
      <Route path = '/about'><About /></Route>
      <Route path = '/'><Home /></Route>
      
  
    </Switch>

  </Router>
  );
}

export default App;
