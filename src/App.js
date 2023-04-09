import React from 'react';

import {Routes , Route, BrowserRouter } from 'react-router-dom';

import { Login } from './Pages/Login';
import Home from './Pages/Home';
import ErrorPage from './error-page';

function App() {
  return (
     <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} error={<ErrorPage/>}/>
          <Route path='/login' element={<Login/>} error={<ErrorPage/>} />
        </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
