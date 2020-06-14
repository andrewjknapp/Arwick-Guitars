import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { Gallery } from './views/Gallery';
import { About } from './views/About';
import { Header } from './components/Header';

function App() {
  return (
    <main>
      <Router>
        <Header/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
      </Router>
    </main>
  );
}

export default App;
