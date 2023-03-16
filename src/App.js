import React from 'react';
import './App.css';
import {Routes , Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './error-page';

function App() {
  return (
     <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} error={<ErrorPage/>}/>
        </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
