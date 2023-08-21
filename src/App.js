import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard'
import Home from './component/Home'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />}/>
        <Route  path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App