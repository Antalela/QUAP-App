import React from 'react';
import './App.css';
import {Routes , Router, Route, createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './error-page';

function App() {
  return (
     <>
     
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
