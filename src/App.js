import React from 'react';
//React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import ViewElements from './pages/ViewElements/ViewElements';
import Home from './pages/Home/Home';
import DetailElement from './pages/DetailElement/DetailElement';
//Styles globals
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
            {/* Routes of data */}
            <Route path='/' element={<Home title="Star Wars" info="Technical Challenge: Frontend Software Engineering with Wannabe" />} />
            <Route exact path='/films' element={<ViewElements element="films" />} />
            <Route exact path='/peoples' element={<ViewElements element="people" />} />
            <Route exact path='/planets' element={<ViewElements element="planets" />} />
            <Route exact path='/species' element={<ViewElements element="species" />} />
            <Route exact path='/starships' element={<ViewElements element="starships" />} />
            <Route exact path='/vehicles' element={<ViewElements element="vehicles" />} />
            {/* Routes of element of data */}
            <Route exact path='/people/:id' element={<DetailElement element={'people/'}  />} />
            <Route exact path='/films/:id' element={<DetailElement element={'films/'}  />} />
            <Route exact path='/planets/:id' element={<DetailElement element={'planets/'} />} />
            <Route exact path='/species/:id' element={<DetailElement element={'species/'} />} />
            <Route exact path='/starships/:id' element={<DetailElement element={'starships/'} />} />
            <Route exact path='/vehicles/:id' element={<DetailElement element={'vehicles/'} />} />    
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
