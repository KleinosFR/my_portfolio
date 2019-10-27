import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import NavMenu from './components/NavMenu';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import About from './components/About';


function App() {
  return (
    <div className="App">
    <NavMenu />
    <Intro />
    <Portfolio />
    <About />
    </div>
  );
}

export default App;
