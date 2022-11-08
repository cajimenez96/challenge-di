import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import styles from './app.module.css';
import People from './pages/People/People';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className={styles.headerContainer}>
          <Navbar />
          <Category />
        </header>
        <main>
          <Routes>
            <Route exact path='/people' element={<People />}>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
