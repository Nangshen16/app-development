import React from 'react';
import Navbars from './components/navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className='App'>
      <h1 className='title'>React Routing By Nang Shen Hom</h1>
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>

          
        </Routes>
      </BrowserRouter>
      

      
     


     
    </div>
  );
}

export default App;
