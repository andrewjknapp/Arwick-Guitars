import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Contact } from './views/Contact';
import { Gallery } from './views/Gallery';
import { About } from './views/About';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className="background">
      <Router>
        <Header/>
        <Navbar/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={About}/>
      </Router>
    </main>
  );
}

export default App;
