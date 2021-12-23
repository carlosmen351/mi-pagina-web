import React from 'react';
import {render} from 'react-dom';
import Home from './containers/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portafolio' />
    </Routes>
  </BrowserRouter>,document.getElementById('root'));