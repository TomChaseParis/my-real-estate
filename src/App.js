import React from 'react';
import Best from './components/best/Best';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Best />
    </div>
  );
}

export default App;
