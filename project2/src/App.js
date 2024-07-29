import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Contact from './components/contact';

// import User from './comments'


function App() {
  return (
    <div className="App">
    <h1 className="title">Project 2 by Nang Shen Hom</h1>
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </BrowserRouter>
            
    
    </div>
  );
}

export default App;
