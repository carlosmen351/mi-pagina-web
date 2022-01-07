import React from 'react';
import {render} from 'react-dom';
import Home from './containers/Home.jsx'
import Portafolio from './containers/Portafolio'
import English from './containers/English'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portafolio' element={<Portafolio/>} />
      <Route path='/english' element={<English/>} />
    </Routes>
  </BrowserRouter>,document.getElementById('root'));