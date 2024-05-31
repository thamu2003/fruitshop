import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from './Project/Register'
import Home from './Project/Home'
import Contact from './Project/Contact'
import Product from './Project/Product'
import About from './Project/About'
import Box from './Project/Box'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}> </Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Box' element={<Box/>}></Route>
    </Routes>
    </>
  )
}

export default App