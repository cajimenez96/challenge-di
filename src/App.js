import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import ViewElements from './pages/ViewElements/ViewElements';
import Home from './pages/Home/Home';
import DetailActor from './pages/DetailActor/DetailActor';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <header className="headerContainer">
          <Navbar />
          <Category />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home title="Star Wars" info="Technical Challenge: Frontend Software Engineering with Wannabe" />} />
            <Route exact path='/films' element={<ViewElements element="films" />} />
            <Route exact path='/peoples' element={<ViewElements element="people" />} />
            <Route exact path='/planets' element={<ViewElements element="planets" />} />
            <Route exact path='/species' element={<ViewElements element="species" />} />
            <Route exact path='/starships' element={<ViewElements element="starships" />} />
            <Route exact path='/vehicles' element={<ViewElements element="vehicles" />} />

            <Route exact path='/people/:id' element={<DetailActor />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
