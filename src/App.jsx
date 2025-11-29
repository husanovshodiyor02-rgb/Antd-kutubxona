import React from 'react'
import Login from './components/Login'
import Registr from './components/Registr'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/registr' element={<Registr />}></Route>
      </Routes>
    </div>
  );
}

export default App