import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import NavMenu from './components/NavMenu';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
