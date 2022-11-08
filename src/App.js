import React from 'react';
import Cards from './components/Cards/Cards';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Category />
      <div className="container-fluid d-flex justify-content-evenly flex-wrap">
        <Cards />
      </div>
    </>
  );
}

export default App;
