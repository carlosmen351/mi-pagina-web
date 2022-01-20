import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '../context/appContext.js';
import Home from '../containers/Home'
import Portafolio from '../containers/Portafolio'
import useInitialState from '../hooks/useInitialState';


const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portafolio' element={<Portafolio />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;