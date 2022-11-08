import React from 'react';
import Cards from './components/Card/Card';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import styles from './app.module.css';

function App() {
  return (
    <>
      <header className={styles.headerContainer}>
        <Navbar />
        <Category />
      </header>
      <div className="container-fluid d-flex justify-content-evenly flex-wrap">
        <Cards />
      </div>
    </>
  );
}

export default App;
