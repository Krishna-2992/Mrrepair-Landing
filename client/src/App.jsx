import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

import Landing from './pages/Landing';
import Success from './pages/Success';
import Fail from './pages/Fail';



function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/success' element={<Success/>}></Route>
          <Route path='/fail' element={<Fail/>}></Route>
        </Routes>
    </div>
  );
}

export default App

