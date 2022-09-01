import React from 'react';

// Components
import Best from './components/best/Best';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
