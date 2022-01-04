import React from 'react';
import {render} from 'react-dom';
import Home from './containers/Home.jsx'
import Portafolio from './containers/Portafolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


render(
  <BrowserRouter basename='/mi-pagina-web'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portafolio' element={<Portafolio/>} />
    </Routes>
  </BrowserRouter>,document.getElementById('root'));