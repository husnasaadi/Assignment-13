import { useState } from 'react'
import './App.css'
// import Cards from './Cards/Cards'
import Home from './Screen/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Screen/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Cards/>
    <Home/> */}
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='product/:id'element={<Product/>}/>
    </Routes>
  
    </>
  )
}

export default App
