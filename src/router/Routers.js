import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import About from '../pages/About'
import Coffee from '../pages/Coffee'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/coffee' element={<Coffee/>}  />
        <Route path='/about' element={<About/>}  />
    </Routes>
  )
}

export default Routers;
