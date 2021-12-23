import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/portafolio' />
    </Routes>
  </BrowserRouter>,document.getElementById('app'));