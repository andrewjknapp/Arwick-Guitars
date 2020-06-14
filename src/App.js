import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { Gallery } from './views/Gallery';
import { About } from './views/About';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
      </Router>
    </main>
  );
}

export default App;
