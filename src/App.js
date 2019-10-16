import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
    <NavMenu />
    <Intro />
    <Portfolio />
    </div>
  );
}

export default App;
